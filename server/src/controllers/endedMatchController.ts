import axios from "axios";
import { MatchPerkStyleDto, ObjectivesDto, ParticipantDtoEndedMatch, PerkStyleSelectionDto, TeamDto } from "../types/apiResponseDtos/match";
import { Match } from "../types/Match";
import { Perks } from "../types/Perks";
import { stringNumberDict } from "../types/StringNumberDict";
import { EndedMatchTeam } from "../types/Team";
import { getKda, getKillParticipation } from "../utils/calculation";
import { getEndedMatchListUrl, getEndedMatchUrl } from "../utils/getUrl/riotApi/getRiotApiUrls";
import { getChampion } from "./championController";
import { getMatchModeInKorean } from "./globalController";
import { getPlayerItems } from "./itemController";
import { getPerks } from "./perksController";
import { extractCommonPlayerParts, getBannedChampions } from "./commonMatchController";
import { getPlayerSummonerSpellsByIds } from "./summonerSpellController";
import { DetailDtos } from "../types/apiResponseDtos/common";
import { ChampionDto } from "../types/apiResponseDtos/championJson";
import { PerkStyleDto } from "../types/apiResponseDtos/perksJson";
import { Player } from "../types/Player";


export const ENDED_GAME_FETCH_UNIT = 5;


const extractEndedMatchPerkIds = async (selectedRuneList: PerkStyleSelectionDto[]): Promise<number[]> => {
    return selectedRuneList.map(selection => selection.perk)
}

const getEndedMatchPerksFromStyle = async (perkStyle: MatchPerkStyleDto, perkStylesFromRiot: PerkStyleDto[]): Promise<Perks | false> => {
    const perkIds = await extractEndedMatchPerkIds(perkStyle.selections);
    return getPerks(perkIds, perkStyle.style, perkStylesFromRiot);
}

const getEndedMatchPerks = async (perkStyles: MatchPerkStyleDto[], perkStylesFromRiot: PerkStyleDto[]): Promise<(Perks | false)[]> => {
    const [mainPerks, subPerks] = await Promise.all(perkStyles.map(async (perkStyle) => {
        return getEndedMatchPerksFromStyle(perkStyle, perkStylesFromRiot)
    })) //perkStyles[0]은 mainPerks, perkStyles[1]은 subPerks을 담고 있음
    return [mainPerks, subPerks]
}

const getEndedMatchPlayerStatistics = async (participant: ParticipantDtoEndedMatch, teamTotalKills: number) => {
    return {
        championLevel: participant.champLevel,
        kills: participant.kills,
        deaths: participant.deaths,
        assists: participant.assists,
        kda: getKda(participant.kills, participant.deaths, participant.assists),
        killParticipation: getKillParticipation(participant.kills, participant.assists, teamTotalKills),
        goldEarned: participant.goldEarned,
        cs: participant.totalMinionsKilled,
        totalDamageDealt: participant.totalDamageDealt,
        totalDamageTaken: participant.totalDamageTaken,
        wardsPlaced: participant.wardsPlaced,
        wardsKilled: participant.wardsKilled,
        detectorWardsPlaced: participant.detectorWardsPlaced,
        visionScore: participant.visionScore
    }
}



const getEndedMatchPlayers = async (
    participants: ParticipantDtoEndedMatch[],
    targetSummonerId: string,
    blueTeamChampionKills: number,
    redTeamChampionKills: number,
    {
        champions: championsFromRiot,
        perkStyles: perkStylesFromRiot,
        summonerSpells: summonerSpellsFromRiot,
        items: itemsFromRiot
    }: DetailDtos
) => {
    try {
        return Promise.all(participants.map(async (participant) => {
            const champion = await getChampion(participant.championId, championsFromRiot);
            if (champion === null) {
                console.log("champion error");
                throw Error;
            }
            const summonerSpells = await getPlayerSummonerSpellsByIds(participant.summoner1Id, participant.summoner2Id, summonerSpellsFromRiot);
            if (summonerSpells === false) {
                console.log("summoner spell error");
                throw Error
            }
            const [mainPerks, subPerks] = await getEndedMatchPerks(participant.perks.styles, perkStylesFromRiot);
            if (!mainPerks || !subPerks) {
                console.log("perks error");
                throw Error
            }
            const items = await getPlayerItems(participant, itemsFromRiot);
            if (items === false) {
                console.log("items error");
                throw Error
            }
            const playerCommonPart = extractCommonPlayerParts(participant, targetSummonerId);
            const gameResultStatistics = await getEndedMatchPlayerStatistics(participant, playerCommonPart.isBlueTeam ? blueTeamChampionKills : redTeamChampionKills);
            return ({
                ...playerCommonPart,
                ...gameResultStatistics,
                champion,
                summonerSpells,
                mainPerks,
                subPerks,
                items
            })
        }))
    } catch (error) {
        console.log(error);
        return false
    }
}

const extractEndedMatchTeamObjectKills = async (objectives: ObjectivesDto): Promise<stringNumberDict> => {
    const objectKills: stringNumberDict = {};
    await Promise.all(
        Object.entries(objectives).map(([objectName, { kills }]) => {
            objectKills[`${objectName}Kills`] = kills;
        })
    )
    return objectKills
}

const getEndedMatchTeam = async (teamObj: TeamDto, championsFromRiot: ChampionDto[]): Promise<EndedMatchTeam> => {
    const bans = await getBannedChampions(teamObj.bans, championsFromRiot);
    const objectKills = await extractEndedMatchTeamObjectKills(teamObj.objectives);
    return ({
        bans,
        win: teamObj.win,
        championKills: objectKills.championKills,
        dragonKills: objectKills.dragonKills,
        baronKills: objectKills.baronKills,
        towerKills: objectKills.towerKills,
        inhibitorKills: objectKills.inhibitorKills,
        riftHeraldKills: objectKills.riftHeraldKills
    })
}

const getEndedMatchTeams = async (teams: TeamDto[], championsFromRiot: ChampionDto[]): Promise<EndedMatchTeam[]> => {
    const blueTeam = await getEndedMatchTeam(teams[0], championsFromRiot);
    const redTeam = await getEndedMatchTeam(teams[1], championsFromRiot);
    return [blueTeam, redTeam];
}

const getEndedMatchData = async (matchId: string) => {
    const url: string = getEndedMatchUrl(matchId);
    const { data: { info: matchData } } = await axios.get(url);
    return matchData;
}


const getPlayerTeam = (player: Player, redTeam: EndedMatchTeam, blueTeam: EndedMatchTeam): EndedMatchTeam => {
    if (player.isBlueTeam) {
        return blueTeam
    } else {
        return redTeam
    }
}

const searchTargetPlayerHasWon = (player: Player, blueTeam: EndedMatchTeam, redTeam: EndedMatchTeam): boolean => {
    const team = getPlayerTeam(player, blueTeam, redTeam);
    return team.win
}

const getSearchTargetPlayer = (players: Player[], blueTeam: EndedMatchTeam, redTeam: EndedMatchTeam): Player | undefined => {
    const searchTargetPlayer: Player | undefined = players.find(player => player.isSearchTarget);
    if (searchTargetPlayer === undefined) {
        return
    }
    return {
        ...searchTargetPlayer,
        win: searchTargetPlayerHasWon(searchTargetPlayer, blueTeam, redTeam)
    }
}

const getEndedMatchById = async (
    matchId: string,
    targetSummonerId: string,
    detailDatasFromRiot: DetailDtos
): Promise<Match | false> => {
    try {
        const matchData = await getEndedMatchData(matchId);
        const gameMode = getMatchModeInKorean(matchData.queueId);
        const championsFromRiot = detailDatasFromRiot.champions;
        const [blueTeam, redTeam]: EndedMatchTeam[] = await getEndedMatchTeams(matchData.teams, championsFromRiot)
        if (blueTeam === undefined || redTeam === undefined) {
            console.log("Team Info Error")
            throw Error;
        }
        const players = await getEndedMatchPlayers(matchData.participants, targetSummonerId, blueTeam.championKills, redTeam.championKills, detailDatasFromRiot)
        if (!players) {
            console.log("player Error")
            throw Error
        }
        const searchTargetPlayer = getSearchTargetPlayer(players, blueTeam, redTeam);
        if (searchTargetPlayer === undefined) {
            console.log('search target Player Error')
            throw Error;
        }
        const match: Match = {
            id: matchId,
            gameMode,
            gameStartTime: matchData.gameStartTimestamp,
            gameLength: matchData.gameDuration,
            participants: players,
            blueTeam,
            redTeam,
            searchTargetPlayer
        }
        return match
    } catch (error) {
        console.log(error);
        return false
    }
}

const getEndedMatchIds = async (summonerPuuid: string, page: number): Promise<string[] | undefined> => {
    try {
        const url: string = getEndedMatchListUrl(summonerPuuid, page);
        const { data: matchIds } = await axios.get(url);
        return matchIds
    } catch (error) {
        console.log(error);
    }
}

export const getEndedMatches = async (summonerPuuid: string, summonerId: string, detailDatasFromRiot: DetailDtos, page: number = 1): Promise<Match[] | false> => {
    try {
        const matchIds = await getEndedMatchIds(summonerPuuid, page);
        if (matchIds === undefined) {
            throw Error;
        }
        const matches: Match[] = await Promise.all(matchIds.map(async (matchId: string) => {
            const match = await getEndedMatchById(matchId, summonerId, detailDatasFromRiot);
            if (match === false) {
                throw Error
            }
            return match
        }))
        return matches
    } catch (error) {
        console.log(error);
        return false;
    }
}
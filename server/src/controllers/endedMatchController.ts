import axios from "axios";
import { MatchPerkStyleDto, ObjectivesDto, ParticipantDtoEndedMatch, PerkStyleSelectionDto, TeamDto } from "../types/apiResponseDtos/match";
import { Match } from "../types/Match";
import { Perks } from "../types/Perks";
import { stringNumberDict } from "../types/StringNumberDict";
import { EndedMatchTeam } from "../types/Team";
import { getKda, getKillParticipation } from "../utils/calculation";
import { getEndedMatchListUrl, getEndedMatchUrl } from "../utils/getUrl/riotApi/getRiotApiUrls";
import { getChampion } from "./championController";
import { getDetailDatasFromRiot, getMatchModeInKorean } from "./globalController";
import { getPlayerItems } from "./itemController";
import { getPerks } from "./perksController";
import { extractCommonPlayerParts, getBannedChampions, getBlueTeamPlayers, getRedTeamPlayers } from "./commonMatchController";
import { getPlayerSummonerSpellsByIds } from "./summonerSpellController";
import { DetailDtos } from "../types/apiResponseDtos/common";
import { ChampionDto } from "../types/apiResponseDtos/championJson";
import { PerkStyleDto } from "../types/apiResponseDtos/perksJson";
import { Player } from "../types/Player";
import Constants from "../constants/constants";
import { Request, Response } from "express";


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

const getEndedMatchPlayerStatistics = async (participant: ParticipantDtoEndedMatch) => {
    return {
        championLevel: participant.champLevel,
        kills: participant.kills,
        deaths: participant.deaths,
        assists: participant.assists,
        kda: getKda(participant.kills, participant.deaths, participant.assists),
        goldEarned: participant.goldEarned,
        cs: participant.totalMinionsKilled,
        totalDamageDealt: participant.totalDamageDealtToChampions,
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
            const gameResultStatistics = await getEndedMatchPlayerStatistics(participant);
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

const addKillParticipationToPlayers = async (players: Player[], teamTotalKills: number): Promise<Player[]> => {
    return players.map(player => {
        return ({
            ...player,
            killParticipation: getKillParticipation(player.kills, player.assists, teamTotalKills),
        })
    })
}

const filterPlayersByTeamId = (players: Player[], teamId: number) => {
    const isBlueTeam = teamId === Constants.codes.teamId.blue;
    return players.filter(player => player.isBlueTeam === isBlueTeam)
}

const getTeamTotalGold = async (players: Player[]): Promise<number> => {
    let totalGold: number = 0;
    for (let player of players) {
        if (player.goldEarned) {
            totalGold += player.goldEarned
        }
    }
    return totalGold
}

const getTeamTotalAssists = async (players: Player[]): Promise<number> => {
    let totalAssists: number = 0;
    for (let player of players) {
        if (player.assists) {
            totalAssists += player.assists
        }
    }
    return totalAssists
}

const getEndedMatchTeam = async (teamObj: TeamDto, championsFromRiot: ChampionDto[], players: Player[]): Promise<EndedMatchTeam> => {
    const bans = await getBannedChampions(teamObj.bans, championsFromRiot);
    const objectKills = await extractEndedMatchTeamObjectKills(teamObj.objectives);
    const currentTeamPlayers = filterPlayersByTeamId(players, teamObj.teamId);
    const totalGold = await getTeamTotalGold(currentTeamPlayers);
    const championAssists = await getTeamTotalAssists(currentTeamPlayers);
    const playersWithKillParticipation = await addKillParticipationToPlayers(currentTeamPlayers, objectKills.championKills);
    return ({
        bans,
        win: teamObj.win,
        championKills: objectKills.championKills,
        championAssists,
        dragonKills: objectKills.dragonKills,
        baronKills: objectKills.baronKills,
        towerKills: objectKills.towerKills,
        inhibitorKills: objectKills.inhibitorKills,
        riftHeraldKills: objectKills.riftHeraldKills,
        totalGold,
        players: playersWithKillParticipation
    })
}

const getEndedMatchTeams = async (teams: TeamDto[], championsFromRiot: ChampionDto[], players: Player[]): Promise<EndedMatchTeam[]> => {
    // const blueTeamPlayers: Player[] = getBlueTeamPlayers(players);
    // const redTeamPlayers: Player[] = getRedTeamPlayers(players);
    const blueTeam = await getEndedMatchTeam(teams[0], championsFromRiot, players);
    const redTeam = await getEndedMatchTeam(teams[1], championsFromRiot, players);
    if (blueTeam && redTeam) {
        blueTeam.championDeaths = redTeam.championKills;
        redTeam.championDeaths = blueTeam.championKills;
    }
    return [blueTeam, redTeam];
}

const getEndedMatchData = async (matchId: string) => {
    const url: string = getEndedMatchUrl(matchId);
    const { data: { info: matchData } } = await axios.get(url);
    return matchData;
}


const findSearchTargetPlayerFromATeam = (teamPlayers: Player[]): Player | undefined => {
    return teamPlayers.find(player => player.isSearchTarget)
}

const getSearchTargetAndTeam = (blueTeam: EndedMatchTeam, redTeam: EndedMatchTeam): [Player | undefined, EndedMatchTeam] => {
    const searchTargetFromBlueTeam = findSearchTargetPlayerFromATeam(blueTeam.players);
    if (searchTargetFromBlueTeam) {
        return [searchTargetFromBlueTeam, blueTeam]
    }
    const searchTargetFromRedTeam = findSearchTargetPlayerFromATeam(redTeam.players);
    return [searchTargetFromRedTeam, redTeam];
}

const getSearchTargetPlayer = (blueTeam: EndedMatchTeam, redTeam: EndedMatchTeam): Player | undefined => {
    const [searchTargetPlayer, searchTargetTeam] = getSearchTargetAndTeam(blueTeam, redTeam);
    if (searchTargetPlayer === undefined) {
        return
    }
    return {
        ...searchTargetPlayer,
        killParticipation: getKillParticipation(searchTargetPlayer.kills, searchTargetPlayer.assists, searchTargetTeam.championKills),
        win: searchTargetTeam.win
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
        const players = await getEndedMatchPlayers(matchData.participants, targetSummonerId, detailDatasFromRiot)
        if (!players) {
            console.log("player Error")
            throw Error
        }
        const [blueTeam, redTeam]: EndedMatchTeam[] = await getEndedMatchTeams(matchData.teams, championsFromRiot, players)
        if (blueTeam === undefined || redTeam === undefined) {
            console.log("Team Info Error")
            throw Error;
        }
        const searchTargetPlayer = getSearchTargetPlayer(blueTeam, redTeam);
        if (searchTargetPlayer === undefined) {
            console.log('search target Player Error')
            throw Error;
        }
        const match: Match = {
            id: matchId,
            gameMode,
            gameStartTime: matchData.gameStartTimestamp,
            gameLength: matchData.gameDuration,
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

export const fetchMatchesByPage = async (req: Request, res: Response) => {
    try {
        const {
            query: { summonerPuuid, page, summonerId }
        } = req;
        if (
            typeof summonerPuuid !== "string"
            || typeof page !== "string"
            || isNaN(parseInt(page))
            || typeof summonerId !== "string"
        ) {
            throw Error
        }
        const detailDatasFromRiot = await getDetailDatasFromRiot();
        if (detailDatasFromRiot === null) {
            throw Error
        }
        const matches = await getEndedMatches(summonerPuuid, summonerId, detailDatasFromRiot, parseInt(page))
        if (matches === false) {
            throw Error
        }
        res.send(matches);
    } catch (error) {
        console.log(error);
        res.send([])
    }
}
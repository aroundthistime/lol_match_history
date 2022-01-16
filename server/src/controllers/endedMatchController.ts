import axios from "axios";
import { BanDto, MatchPerkStyleDto, ObjectivesDto, ParticipantDtoEndedGame, PerkStyleSelectionDto, TeamDto } from "../types/apiResponseDtos/match";
import { Champion } from "../types/Champion";
import { EndedMatchFetchResult } from "../types/FetchResult";
import { Match } from "../types/Match";
import { Perks } from "../types/Perks";
import { stringNumberDict } from "../types/StringNumberDict";
import { EndedGameTeam } from "../types/Team";
import { getKda, getKillParticipation } from "../utils/calculation";
import { getEndedMatchListUrl, getEndedMatchUrl } from "../utils/getUrl/riotApi/getRiotApiUrls";
import { getChampionInfos } from "./championController";
import { CODE_ERROR_RESULT, getGameModeInKorean, getFailedFetchResultByStatusCode } from "./globalController";
import { getPlayerItems } from "./itemController";
import { getPerks } from "./perksController";
import { extractCommonPlayerParts } from "./playerController";
import { getPlayerSummonerSpellsByIds } from "./summonerSpellController";

const extractEndedGamePerkIds = async (selectedRuneList: PerkStyleSelectionDto[]): Promise<number[]> => {
    return selectedRuneList.map(selection => selection.perk)
}

const getEndedGamePerks = async (perkStylesList: MatchPerkStyleDto[]): Promise<(Perks | false)[]> => {
    const mainPerkStyle = perkStylesList[0];
    const subPerkStyle = perkStylesList[1];
    const mainPerkIds = await extractEndedGamePerkIds(mainPerkStyle.selections);
    const subPerkIds = await extractEndedGamePerkIds(subPerkStyle.selections)
    const mainPerks = await getPerks(mainPerkIds, mainPerkStyle.style);
    const subPerks = await getPerks(subPerkIds, subPerkStyle.style);
    return [mainPerks, subPerks]
}

const getEndedGamePlayerStatistics = async (participant: ParticipantDtoEndedGame, teamTotalKills: number) => {
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



const extractEndedGamePlayerInfos = async (participants: ParticipantDtoEndedGame[], targetSummonerId: string, blueTeamChampionKills: number, redTeamChampionKills: number) => {
    try {
        return Promise.all(participants.map(async (participant) => {
            const champion = await getChampionInfos(participant.championId);
            if (champion === null) {
                throw Error;
            }
            const summonerSpells = await getPlayerSummonerSpellsByIds(participant.summoner1Id, participant.summoner2Id);
            if (summonerSpells === false) {
                throw Error
            }
            const [mainPerks, subPerks] = await getEndedGamePerks(participant.perks.styles);
            if (!mainPerks || !subPerks) {
                throw Error
            }
            const items = await getPlayerItems(participant);
            if (items === false) {
                throw Error
            }
            const playerCommonPart = extractCommonPlayerParts(participant, targetSummonerId);
            const gameResultStatistics = await getEndedGamePlayerStatistics(participant, playerCommonPart.isBlueTeam ? blueTeamChampionKills : redTeamChampionKills);
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

const getEndedGameBans = async (bans: BanDto[]): Promise<(Champion | null)[]> => {
    return Promise.all(bans.map(async (banObj) => {
        return getChampionInfos(banObj.championId)
    }))
}

const extractEndedGameTeamObjectKills = async (objectives: ObjectivesDto): Promise<stringNumberDict> => {
    const objectKills: stringNumberDict = {};
    await Promise.all(
        Object.entries(objectives).map(([objectName, { kills }]) => {
            objectKills[`${objectName}Kills`] = kills;
        })
    )
    return objectKills
}

const extractEndedGameTeamInfo = async (teamObj: TeamDto): Promise<EndedGameTeam> => {
    const bans = await getEndedGameBans(teamObj.bans);
    const objectKills = await extractEndedGameTeamObjectKills(teamObj.objectives);
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

const extractEndedGameTeamsInfo = async (teams: TeamDto[]): Promise<EndedGameTeam[]> => {
    const blueTeam = await extractEndedGameTeamInfo(teams[0]);
    const redTeam = await extractEndedGameTeamInfo(teams[1]);
    return [blueTeam, redTeam];
}

const fetchEndedMatchById = async (matchId: string, targetSummonerId: string) => {
    const url: string = getEndedMatchUrl(matchId);
    try {
        const { status, data: { info: matchData } } = await axios.get(url);
        if (status === 200) {
            const gameMode = getGameModeInKorean(matchData.queueId);
            const [blueTeam, redTeam]: EndedGameTeam[] = await extractEndedGameTeamsInfo(matchData.teams)
            const players = await extractEndedGamePlayerInfos(matchData.participants, targetSummonerId, blueTeam.championKills, redTeam.championKills)
            if (!players) {
                throw Error
            }
            const match: Match = {
                id: matchId,
                gameMode,
                gameStartTime: matchData.gameStartTimestamp,
                gameLength: matchData.gameDuration,
                participants: players,
                blueTeam,
                redTeam
            }
            return match
        } else {
            return getFailedFetchResultByStatusCode(status);
        }
    } catch (error) {
        console.log(error);
        return CODE_ERROR_RESULT;
    }
}

export const fetchEndedMatches = async (summonerPuuid: string, summonerId: string, page: number = 1): Promise<EndedMatchFetchResult> => {
    const url: string = getEndedMatchListUrl(summonerPuuid, page);
    const { status, data: matchIds } = await axios.get(url);
    if (status === 200) {
        const endedMatches = await Promise.all(matchIds.map(async (matchId: string) => {
            return fetchEndedMatchById(matchId, summonerId)
        }))
        return {
            result: true,
            Matches: endedMatches
        }
    } else {
        return getFailedFetchResultByStatusCode(status);
    }
}
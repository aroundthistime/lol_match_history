import axios from "axios";
import Constants from "../constants/constants";
import { ChampionDto } from "../types/apiResponseDtos/championJson";
import { PerkStyleDto } from "../types/apiResponseDtos/perksJson";
import { ParticipantDtoCurrentMatch, PerksDtoCurrentMatch } from "../types/apiResponseDtos/spectator";
import { Champion } from "../types/Champion";
import { Match } from "../types/Match";
import { Perks } from "../types/Perks";
import { Player } from "../types/Player";
import { CurrentMatchTeam } from "../types/Team";
import { getCurrentMatchUrl } from "../utils/getUrl/riotApi/getRiotApiUrls";
import { getChampion } from "./championController";
import { getMatchModeInKorean } from "./globalController";
import { getPerks } from "./perksController";
import { extractCommonPlayerParts, getBannedChampions, getBlueTeamPlayers, getRedTeamPlayers } from "./commonMatchController";
import { getPlayerSummonerSpellsByIds } from "./summonerSpellController";
import { BanDto } from "../types/apiResponseDtos/match";
import { DetailDtos } from "../types/apiResponseDtos/common";
import { defineWhetherNoDataOrError } from "../utils/errorHandler";


const splitCurrentMatchPerkIds = (perkIds: number[]): number[][] => {
    const mainPerkIds = perkIds.slice(0, 4);
    const subPerkIds = perkIds.slice(4, 6);
    return [mainPerkIds, subPerkIds];
}

const getCurrentMatchPerks = async (perks: PerksDtoCurrentMatch, perkStylesFromRiot: PerkStyleDto[]): Promise<(Perks | false)[]> => {
    try {
        const [mainPerkIds, subPerkIds] = splitCurrentMatchPerkIds(perks.perkIds);
        const mainPerks = await getPerks(mainPerkIds, perks.perkStyle, perkStylesFromRiot);
        const subPerks = await getPerks(subPerkIds, perks.perkSubStyle, perkStylesFromRiot);
        return [mainPerks, subPerks]
    } catch (error) {
        return [false, false]
    }
}

const filterBansByTeamId = (bannedChampions: BanDto[], teamId: number) =>
    bannedChampions.filter(bannedChampion => bannedChampion.teamId === teamId);


const getBansByTeamId = async (bans: BanDto[], teamId: number, championsFromRiot: ChampionDto[]): Promise<(Champion | null)[]> => {
    const targetTeamBans = filterBansByTeamId(bans, teamId);
    return getBannedChampions(targetTeamBans, championsFromRiot)
}

const getCurrentMatchBans = async (bans: BanDto[], championsFromRiot: ChampionDto[]): Promise<(Champion | null)[][]> => {
    const blueTeamId = Constants.codes.teamId.blue;
    const redTeamId = Constants.codes.teamId.red;
    const blueTeamBans = await getBansByTeamId(bans, blueTeamId, championsFromRiot);
    const redTeamBans = await getBansByTeamId(bans, redTeamId, championsFromRiot);
    return [blueTeamBans, redTeamBans]
}

const getCurrentMatchTeams = async (bannedChampions: BanDto[], championsFromRiot: ChampionDto[], players: Player[]): Promise<CurrentMatchTeam[]> => {
    const [blueTeamBans, redTeamBans] = await getCurrentMatchBans(bannedChampions, championsFromRiot);
    const blueTeamPlayers = getBlueTeamPlayers(players);
    const RedTeamPlayers = getRedTeamPlayers(players);
    const blueTeam: CurrentMatchTeam = {
        bans: blueTeamBans,
        players: blueTeamPlayers
    };
    const redTeam: CurrentMatchTeam = {
        bans: redTeamBans,
        players: RedTeamPlayers
    }
    return [blueTeam, redTeam]
}


const getCurrentMatchPlayers = async (
    participants: ParticipantDtoCurrentMatch[],
    targetSummonerId: string | undefined,
    {
        champions: championsFromRiot,
        perkStyles: perkStylesFromRiot,
        summonerSpells: summonerSpellsFromRiot,
    }: DetailDtos
) => {
    try {
        return Promise.all(participants.map(async (participant) => {
            const champion = await getChampion(participant.championId, championsFromRiot);
            if (champion === null) {
                console.log("Current Match Champion Error");
                throw Error;
            }
            const [mainPerks, subPerks] = await getCurrentMatchPerks(participant.perks, perkStylesFromRiot);
            if (!mainPerks || !subPerks) {
                console.log("Current Match Perks Error");
                throw Error
            }
            const summonerSpells = await getPlayerSummonerSpellsByIds(participant.spell1Id, participant.spell2Id, summonerSpellsFromRiot);
            if (summonerSpells === false) {
                console.log("Current Match Summoner Spell Error")
                throw Error
            }
            return ({
                ...extractCommonPlayerParts(participant, targetSummonerId), //완료된 게임이나 진행중인 게임이나 공통적으로 적용되는 부분들
                champion,
                mainPerks,
                subPerks,
                summonerSpells
            })
        }))
    } catch (error) {
        console.log(error);
        return false
    }
}

const getCurrentMatchData = async (summonerId: string): Promise<any> => {
    try {
        const url = getCurrentMatchUrl(summonerId);
        const { data } = await axios.get(url);
        return data
    } catch (error: any) {
        return defineWhetherNoDataOrError(error);
    }
}

export const getCurrentMatch = async (
    summonerId: string,
    detailDatasFromRiot: DetailDtos
): Promise<Match | null | false> => {
    try {
        const currentMatch = await getCurrentMatchData(summonerId);
        if (currentMatch === null) {
            return null
        }
        if (currentMatch === false) {
            throw Error
        }
        const gameMode = getMatchModeInKorean(currentMatch.gameQueueConfigId);
        const gamePlayers: Player[] | false = await getCurrentMatchPlayers(currentMatch.participants, summonerId, detailDatasFromRiot);
        if (!gamePlayers) {
            console.log("CURRENT GAME PLAYERS ERROR");
            throw Error
        }
        const championsFromRiot = detailDatasFromRiot.champions;
        const [blueTeam, redTeam]: CurrentMatchTeam[] = await getCurrentMatchTeams(currentMatch.bannedChampions, championsFromRiot, gamePlayers);
        return ({
            id: `${currentMatch.gameId}`,
            gameMode,
            gameStartTime: currentMatch.gameStartTime,
            gameLength: currentMatch.gameLength,
            blueTeam,
            redTeam
        })
    } catch (error) { //no current games or API KEY expired
        console.log(error);
        return false;
    }
}
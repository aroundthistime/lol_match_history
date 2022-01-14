import axios from "axios";
import Constants from "../constants/constants";
import { BannedChampionsCurrentGame, ParticipantDtoCurrentGame, PerksDtoCurrentGame } from "../types/apiResponseDtos/spectator";
import { Champion } from "../types/Champion";
import { Match } from "../types/Match";
import { Perks } from "../types/Perks";
import { Player } from "../types/Player";
import { CurrentGameTeam } from "../types/Team";
import { getCurrentMatchUrl } from "../utils/getUrl/riotApi/getRiotApiUrls";
import { getChampionInfos } from "./championControllers";
import { getGameModeInKorean } from "./globalControllers";
import { getPerks } from "./perksControllers";
import { extractCommontPlayerParts } from "./playerControllers";
import { getPlayerSummonerSpells } from "./summonerSpellController";

const getCurrentGamePerks = async (perks: PerksDtoCurrentGame): Promise<(Perks | false)[]> => {
    try {
        const mainPerkIds = perks.perkIds.slice(0, 4);
        const subPerkIds = perks.perkIds.slice(4, 6);
        const mainPerks = await getPerks(mainPerkIds, perks.perkStyle);
        const subPerks = await getPerks(subPerkIds, perks.perkSubStyle);
        return [mainPerks, subPerks]
    } catch (error) {
        return [false, false]
    }

}

const filterBansByTeamId = (bannedChampions: BannedChampionsCurrentGame[], teamId: number) =>
    bannedChampions.filter(bannedChampion => bannedChampion.teamId === teamId);

const addChampionInfosToBanList = async (bannedChampions: BannedChampionsCurrentGame[]): Promise<(Champion | null)[]> => {
    return Promise.all(bannedChampions.map(async (bannedChampion) => {
        return getChampionInfos(bannedChampion.championId)
    }))
}

const getCurrentGameBans = async (bannedChampions: BannedChampionsCurrentGame[]): Promise<(Champion | null)[][]> => {
    const blueTeamId = Constants.codes.teamId.blue;
    const redTeamId = Constants.codes.teamId.red;
    const blueTeamBans = filterBansByTeamId(bannedChampions, blueTeamId);
    const redTeamBans = filterBansByTeamId(bannedChampions, redTeamId);
    const blueTeamBansWithChampionInfos = await addChampionInfosToBanList(blueTeamBans);
    const redTeamBansWithChampionInfos = await addChampionInfosToBanList(redTeamBans);
    return [blueTeamBansWithChampionInfos, redTeamBansWithChampionInfos]
}

const extractCurrentGameTeamsInfo = async (bannedChampions: BannedChampionsCurrentGame[]): Promise<CurrentGameTeam[]> => {
    const [blueTeamBans, redTeamBans] = await getCurrentGameBans(bannedChampions);
    const blueTeam: CurrentGameTeam = {
        bans: blueTeamBans
    };
    const redTeam: CurrentGameTeam = {
        bans: redTeamBans
    }
    return [blueTeam, redTeam]
}


const extractCurrentGamePlayerInfos = async (participants: ParticipantDtoCurrentGame[], targetSummonerId: string | undefined) => {
    try {
        return Promise.all(participants.map(async (participant) => {
            const champion = await getChampionInfos(participant.championId);
            if (champion === null) {
                throw Error;
            }
            const summonerSpells = await getPlayerSummonerSpells(participant.spell1Id, participant.spell2Id);
            if (summonerSpells === false) {
                throw Error
            }
            const [mainPerks, subPerks] = await getCurrentGamePerks(participant.perks);
            if (!mainPerks || !subPerks) {
                throw Error
            }
            return ({
                ...extractCommontPlayerParts(participant, targetSummonerId),
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

export const fetchCurrentMatch = async (summonerId: string): Promise<Match | null> => {
    try {
        const url = getCurrentMatchUrl(summonerId);
        const response = await axios.get(url);
        const currentMatchData = response.data;
        const gameMode = getGameModeInKorean(currentMatchData.gameQueueConfigId);;
        const gamePlayers: Player[] | false = await extractCurrentGamePlayerInfos(currentMatchData.participants, summonerId);
        if (!gamePlayers) {
            throw Error
        }
        const [blueTeam, redTeam]: CurrentGameTeam[] = await extractCurrentGameTeamsInfo(currentMatchData.bannedChampions)
        const currentMatch: Match = {
            id: currentMatchData.gameId,
            gameMode,
            gameStartTime: currentMatchData.gameStartTime,
            gameLength: currentMatchData.gameLength,
            participants: gamePlayers,
            blueTeam,
            redTeam
        }
        return currentMatch;
    } catch (error) { //no current games or API KEY expired
        return null;
    }
}
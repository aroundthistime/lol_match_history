import Constants from "../constants/constants"
import { ChampionDto } from "../types/apiResponseDtos/championJson"
import { BanDto, ParticipantDtoEndedMatch } from "../types/apiResponseDtos/match"
import { ParticipantDtoCurrentMatch } from "../types/apiResponseDtos/spectator"
import { Champion } from "../types/Champion"
import { Match } from "../types/Match"
import { Player } from "../types/Player"
import { CurrentMatchTeam, EndedMatchTeam } from "../types/Team"
import { getChampion } from "./championController"

export const extractCommonPlayerParts = (participant: ParticipantDtoCurrentMatch | ParticipantDtoEndedMatch, targetSummonerId: string | undefined) => {
    return ({
        name: participant.summonerName,
        id: participant.summonerId,
        isSearchTarget: participant.summonerId === targetSummonerId,
        isBlueTeam: participant.teamId === Constants.codes.teamId.blue,
    })
}

export const getBannedChampions = async (bans: BanDto[], championsFromRiot: ChampionDto[]): Promise<(Champion | null)[]> => {
    return Promise.all(bans.map(async (ban) => {
        return getChampion(ban.championId, championsFromRiot);
    }))
}
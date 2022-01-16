import Constants from "../constants/constants"
import { ParticipantDtoEndedGame } from "../types/apiResponseDtos/match"
import { ParticipantDtoCurrentGame } from "../types/apiResponseDtos/spectator"

export const extractCommonPlayerParts = (participant: ParticipantDtoCurrentGame | ParticipantDtoEndedGame, targetSummonerId: string | undefined) => {
    return ({
        name: participant.summonerName,
        id: participant.summonerId,
        isSearchTarget: participant.summonerId === targetSummonerId,
        isBlueTeam: participant.teamId === Constants.codes.teamId.blue,
    })
}

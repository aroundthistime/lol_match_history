import { Match } from "../types/Match/Match";
import { Perks } from "../types/Perks/Perks";
import { CurrentMatchPlayer, EndedMatchPlayer } from "../types/Player/Player";

export const seperateParticipants = async (participants: CurrentMatchPlayer[] | EndedMatchPlayer[]): Promise<CurrentMatchPlayer[][] | EndedMatchPlayer[][]> => {
    const blueTeamPlayers = [];
    const redTeamPlayers = [];
    for (let participant of participants) {
        if (participant.isBlueTeam) {
            blueTeamPlayers.push(participant)
        } else {
            redTeamPlayers.push(participant)
        }
    }
    return [blueTeamPlayers, redTeamPlayers]
}
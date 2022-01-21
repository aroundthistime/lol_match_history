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

export const getKDATextClassName = (kdaString: string): string => {
    let className: string;
    const kda = parseFloat(kdaString);
    if (isNaN(kda)) {
        className = "kda--perfect"
    } else if (kda >= 5) {
        className = "kda--max"
    } else if (kda >= 3) {
        className = "kda--high"
    } else if (kda >= 2) {
        className = "kda--average"
    } else {
        className = "kda--low"
    }
    return className
}
import { CurrentMatchPlayer, EndedMatchPlayer } from "../types/Player/Player";
import { getMaxOfArray } from "./math";

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

const getDamageMaxRange = (damages: number[]): number => {
    const maxDamage = getMaxOfArray(damages);
    let standard: number = 10000;
    let maxRange: number;
    while (maxRange === undefined) {
        if (maxDamage <= standard) {
            maxRange = standard
        } else {
            standard += 10000;
        }
    }
    return maxRange;
}

export const getDamageDealtMaxRange = (players: EndedMatchPlayer[]): number => {
    const damages = players.map(player => player.totalDamageDealt);
    return getDamageMaxRange(damages);
}

export const getDamageTakenMaxRange = (players: EndedMatchPlayer[]): number => {
    const damages = players.map(player => player.totalDamageTaken);
    return getDamageMaxRange(damages);
}
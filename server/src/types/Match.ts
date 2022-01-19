import { Player } from "./Player";
import { CurrentMatchTeam, EndedMatchTeam } from "./Team";

export interface Match {
    id: string;
    gameMode: string;
    gameStartTime: number;
    gameLength: number;
    redTeam: EndedMatchTeam | CurrentMatchTeam;
    blueTeam: EndedMatchTeam | CurrentMatchTeam;
    participants: Player[];
}
import { CurrentMatchPlayer, EndedMatchPlayer } from "./Player";
import { CurrentMatchTeam, EndedMatchTeam } from "./Team";

export interface Match {
    id: string;
    gameMode: string;
    gameStartTime: Date;
    gameLength: number;
    redTeam: EndedMatchTeam | CurrentMatchTeam;
    blueTeam: EndedMatchTeam | CurrentMatchTeam;
    participants: (EndedMatchPlayer | CurrentMatchPlayer)[];
}
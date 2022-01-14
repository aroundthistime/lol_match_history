import { Player } from "./Player";
import { CurrentGameTeam, EndedGameTeam } from "./Team";

export interface Match {
    id: string;
    gameMode: string;
    gameStartTime: Date;
    gameLength: number;
    redTeam: EndedGameTeam | CurrentGameTeam;
    blueTeam: EndedGameTeam | CurrentGameTeam;
    participants: Player[];
}
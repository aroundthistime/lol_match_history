import { Champion } from "./Champion";
import { Player } from "./Player";
import { Team } from "./Team";

export interface Match {
    id: string;
    gameMode: string;
    gameType: number;
    gameStartTime: Date;
    gameLength: number;
    redTeam?: Team;
    blueTeam?: Team;
    participants: Player[];
    bannedChampions: Champion[];
}
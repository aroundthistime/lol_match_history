import { CurrentMatchPlayer, EndedMatchPlayer } from "../Player/Player";
import { CurrentMatchTeam, EndedMatchTeam } from "../Team/Team";

export interface Match {
    id: string;
    gameMode: string;
    gameStartTime: number;
    gameLength: number;
    redTeam: EndedMatchTeam | CurrentMatchTeam;
    blueTeam: EndedMatchTeam | CurrentMatchTeam;
    participants: (EndedMatchPlayer | CurrentMatchPlayer)[];
    searchTarget?: EndedMatchPlayer | CurrentMatchPlayer;
}
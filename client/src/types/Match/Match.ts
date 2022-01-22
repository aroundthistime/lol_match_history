import { CurrentMatchPlayer, EndedMatchPlayer } from "../Player/Player";
import { CurrentMatchTeam, EndedMatchTeam } from "../Team/Team";

interface Match {
    id: string;
    gameMode: string;
    gameStartTime: number;
    gameLength: number;

}

export interface CurrentMatch extends Match {
    redTeam: CurrentMatchTeam;
    blueTeam: CurrentMatchTeam;
}

export interface EndedMatch extends Match {
    searchTargetPlayer: EndedMatchPlayer;
    redTeam: EndedMatchTeam;
    blueTeam: EndedMatchTeam;
}
import { Champion } from "./Champion";
import { Player } from "./Player";

export interface CurrentMatchTeam {
    players: Player[];
    bans?: (Champion | null)[];
}

export interface EndedMatchTeam extends CurrentMatchTeam {
    championKills: number;
    championAssists?: number;
    dragonKills: number;
    baronKills: number;
    towerKills: number;
    inhibitorKills: number;
    riftHeraldKills: number;
    totalGold?: number;
    win: boolean;
}

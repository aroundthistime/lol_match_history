import { Champion } from "./Champion";

export interface CurrentMatchTeam {
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

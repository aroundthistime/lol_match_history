import { Ban } from "../Ban/Ban";

export interface CurrentMatchTeam {
    bans?: Ban[];
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

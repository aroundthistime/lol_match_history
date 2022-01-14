import { Champion } from "./Champion";

export interface CurrentGameTeam {
    bans?: (Champion | null)[];
}

export interface EndedGameTeam extends CurrentGameTeam {
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

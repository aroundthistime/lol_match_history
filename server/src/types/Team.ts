import { Champion } from "./Champion";

export interface Team {
    isBlue: boolean;
    bans: Champion[];
    championKills?: number;
    championAssists?: number;
    dragonKills?: number;
    baronKills?: number;
    towerKills?: number;
    totalGold?: number;
    win?: boolean;
}
import { Champion } from "./Champion";
import { Player } from "./Player";

export interface Team {
    isBlue: boolean;
    participants: Player[];
    bans: Champion[];
    championKills?: number;
    championAssists?: number;
    dragonKills?: number;
    baronKills?: number;
    towerKills?: number;
    totalGold?: number;
    win?: boolean;
}
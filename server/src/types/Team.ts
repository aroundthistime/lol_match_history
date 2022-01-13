import { Champion } from "./Champion";

export interface Team {
    isBlueTeam: boolean;
    bans?: (Champion | null)[];
    championKills?: number;
    championAssists?: number;
    dragonKills?: number;
    baronKills?: number;
    towerKills?: number;
    totalGold?: number;
    win?: boolean;
}
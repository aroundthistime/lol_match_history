import { Ban } from "../Ban/Ban";
import { CurrentMatchPlayer, EndedMatchPlayer } from "../Player/Player";

interface Team {
    bans?: Ban[];
}

export interface CurrentMatchTeam extends Team {
    players: CurrentMatchPlayer[];
    championKills: number;
    championDeaths?: number;
    championAssists?: number;
    dragonKills: number;
    baronKills: number;
    towerKills: number;
    inhibitorKills: number;
    riftHeraldKills: number;
    totalGold?: number;
    win: boolean;
}

export interface EndedMatchTeam extends Team {
    players: EndedMatchPlayer[];
    championKills: number;
    championDeaths?: number;
    championAssists?: number;
    dragonKills: number;
    baronKills: number;
    towerKills: number;
    inhibitorKills: number;
    riftHeraldKills: number;
    totalGold?: number;
    win: boolean;
}

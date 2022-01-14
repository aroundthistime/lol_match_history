import { Champion } from "./Champion";
import { Item } from "./Item";
import { Perks } from "./Perks";
import { SummonerSpell } from "./Spell";
import { Stat } from "./Stat";
import { User } from "./User";



export interface Player extends User {
    isSearchTarget: boolean; //검색의 기준이 되는 유저인지 여부
    isBlueTeam: boolean;
    champion: Champion;
    mainPerks: Perks;
    subPerks: Perks;
    summonerSpells: SummonerSpell[];
    // stats?: Stat[];
    championLevel?: number;
    items?: (Item | null)[];
    kills?: number;
    deaths?: number;
    assists?: number;
    kda?: string;
    killParticipation?: string;
    goldEarned?: number;
    cs?: number;
    totalDamageDealt?: number;
    totalDamageTaken?: number;
    wardsPlaced?: number;
    wardsKilled?: number;
    detectorWardsPlaced?: number;
    visionScore?: number;
}
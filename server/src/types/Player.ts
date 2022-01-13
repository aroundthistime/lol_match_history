import { Champion } from "./Champion";
import { Item } from "./Item";
import { Perks } from "./Perks";
import { Spell } from "./Spell";
import { Stat } from "./Stat";
import { User } from "./User";



export interface Player extends User {
    isSearchTarget: boolean; //검색의 기준이 되는 유저인지 여부
    isBlueTeam: boolean;
    champion: Champion;
    mainPerks: Perks;
    subPerks: Perks;
    spells: Spell[];
    stats?: Stat[];
    championLevel?: number;
    items?: [Item | undefined];
    kills?: number;
    deaths?: number;
    assists?: number;
    killParticipation?: number;
    goldEarned?: number;
    totalMinionsKilled?: number;
    totalDamageDealt?: number;
    totalDamageTaken?: number;
    wardsPlaced?: number;
    wardsKilled?: number;
    visionScore?: number;
}
import { Champion } from "../Champion/Champion";
import { Item } from "../Item/Item";
import { Perks } from "../Perks/Perks";
import { SummonerSpell } from "../SummonerSpell/SummonerSpell";
import { User } from "../User/User";



export interface CurrentMatchPlayer extends User {
    isSearchTarget: boolean; //검색의 기준이 되는 유저인지 여부
    isBlueTeam: boolean;
    champion: Champion;
    mainPerks: Perks;
    subPerks: Perks;
    summonerSpells: SummonerSpell[];
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

export interface EndedMatchPlayer extends User {
    isSearchTarget: boolean; //검색의 기준이 되는 유저인지 여부
    isBlueTeam: boolean;
    champion: Champion;
    mainPerks: Perks;
    subPerks: Perks;
    summonerSpells: SummonerSpell[];
    championLevel: number;
    items: (Item | null)[];
    kills: number;
    deaths: number;
    assists: number;
    kda: string;
    killParticipation: string;
    goldEarned: number;
    cs: number;
    totalDamageDealt: number;
    totalDamageTaken: number;
    wardsPlaced: number;
    wardsKilled: number;
    detectorWardsPlaced: number;
    visionScore: number;
}
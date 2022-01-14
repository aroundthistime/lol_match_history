import { ImageDto } from "./common";

export interface ChampionDto {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: ChampionInfoDto;
    image: ImageDto;
    tags: string[];
    partype: string;
    stats: ChampionStatsDto;
}

interface ChampionInfoDto {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
}

interface ChampionStatsDto {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
}
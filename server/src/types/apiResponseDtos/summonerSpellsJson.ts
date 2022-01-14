import { ImageDto } from "./common";

export interface SummonerSpellDto {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    maxrank: number;
    cooldown: number;
    cooldownBurn: string;
    cost: number[];
    costBurn: string;
    datavalues: any;
    effect: any[];
    effectBurn: any[];
    vars: any[];
    key: string;
    summonerLevel: number;
    modes: string[];
    costType: string;
    maxammo: string;
    range: number[];
    rangeBurn: string;
    image: ImageDto;
    resource: string;
}
import { ChampionDto } from "./championJson";
import { ItemsDto } from "./itemJson";
import { PerkStyleDto } from "./perksJson";
import { SummonerSpellDto } from "./summonerSpellsJson";

//하나 이상의 API에서 공통적으로 등장하는 부분
export interface ParticipantDtoDefault {
    championId: number;
    teamId: number;
    summonerId: string;
    summonerName: string;
}

export interface ImageDto {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface DetailDtos {
    champions: ChampionDto[];
    perkStyles: PerkStyleDto[];
    summonerSpells: SummonerSpellDto[];
    items: ItemsDto;
}
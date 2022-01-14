import { ParticipantDtoDefault } from "./common";

//현재 진행중인 게임 (미완료 상태)
export interface ParticipantDtoCurrentGame extends ParticipantDtoDefault {
    perks: PerksDtoCurrentGame;
    profileIconId: number;
    bot: boolean;
    spell1Id: number;
    spell2Id: number;
    gameCustomizationObjects: GameCustomizationObject[];
}

export interface PerksDtoCurrentGame {
    perkIds: number[];
    perkStyle: number;
    perkSubStyle: number;
}

export interface GameCustomizationObject {
    category: string;
    content: string;
}

export interface BannedChampionsCurrentGame {
    pickTurn: number;
    championId: number;
    teamId: number;
}
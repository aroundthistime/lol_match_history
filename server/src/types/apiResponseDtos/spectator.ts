import { ParticipantDtoDefault } from "./common";

//현재 진행중인 게임 (미완료 상태)
export interface ParticipantDtoCurrentMatch extends ParticipantDtoDefault {
    perks: PerksDtoCurrentMatch;
    profileIconId: number;
    bot: boolean;
    spell1Id: number;
    spell2Id: number;
    gameCustomizationObjects: MatchCustomizationObject[];
}

export interface PerksDtoCurrentMatch {
    perkIds: number[];
    perkStyle: number;
    perkSubStyle: number;
}

export interface MatchCustomizationObject {
    category: string;
    content: string;
}
import constants from "../constants/constants";
import { QueueTypeEng, QueueTypeId, QueueTypeKor } from "../types/QueueType";
import { getChampionsFromRiot } from "./championController";
import { getItemsFromRiot } from "./itemController";
import { getPerkStylesFromRiot } from "./perksController";
import { getSummonerSpellsFromRiot } from "./summonerSpellController";
import { ChampionDto } from "../types/apiResponseDtos/championJson";
import { PerkStyleDto } from "../types/apiResponseDtos/perksJson";
import { SummonerSpellDto } from "../types/apiResponseDtos/summonerSpellsJson";
import { ItemsDto } from "../types/apiResponseDtos/itemJson";
import { DetailDtos } from "../types/apiResponseDtos/common";


export const GAME_VERSION = "12.2.1";

export const FAILED_RESULT = {
    result: false,
}

export const getMatchModeInKorean = (queueTypeId: QueueTypeId): QueueTypeKor => {
    const gameModeEng: QueueTypeEng = constants.codes.queueType[queueTypeId];
    const gameModeKor: QueueTypeKor = constants.korean.queueType[gameModeEng];
    return gameModeKor
}

export const getDetailDatasFromRiot = async (): Promise<DetailDtos | null> => { //일부 정보는 API가 아니라 JSON에서 직접 원하는 정보 추출해야됨
    try {
        const champions: ChampionDto[] | undefined = await getChampionsFromRiot();
        if (champions === undefined) {
            throw Error;
        }
        const perkStyles: PerkStyleDto[] | undefined = await getPerkStylesFromRiot();
        if (perkStyles === undefined) {
            throw Error;
        }
        const summonerSpells: SummonerSpellDto[] | undefined = await getSummonerSpellsFromRiot();
        if (summonerSpells === undefined) {
            throw Error;
        }
        const items: ItemsDto | undefined = await getItemsFromRiot();
        if (items === undefined) {
            throw Error;
        }
        return {
            champions,
            perkStyles,
            summonerSpells,
            items
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}
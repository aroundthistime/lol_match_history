import axios from "axios";
import { ChampionDto } from "../types/apiResponseDtos/championJson";
import { Champion } from "../types/Champion";
import { getChampionImageUrl } from "../utils/getUrl/images/getImageUrls";
import { getChampionsJsonUrl } from "../utils/getUrl/json/getJsonUrls";

const NO_CHAMPION_ID = -1; //챔피언 선택하지 않았을 때 보여지는 championId (ex. 챔피언 밴 안 함)

const convertToChampionType = (championId: number, championName: string): Champion => {
    return ({
        id: championId,
        name: championName,
        image: getChampionImageUrl(championId)
    })
}

export const findChampionById = (idInNumber: number, champions: ChampionDto[]): ChampionDto | undefined => {
    const id: string = `${idInNumber}`; //json에는 champion ID가 string으로 저장되어있기 때문에 맞춰서 변환
    return champions.find(champion => champion.key === id)
}

const getChampionsObjectsFromRiot = async (): Promise<ChampionDto[] | undefined> => {
    try {
        const url: string = getChampionsJsonUrl();
        const { data: { data: championsJsonFromRiot } } = await axios.get(url);
        return Object.values(championsJsonFromRiot);
    } catch (error) {
        console.log(error);
    }
}

export const getChampionInfos = async (championId: number): Promise<Champion | null> => {
    try {
        if (championId === NO_CHAMPION_ID) {
            return null;
        }
        const championObjectsFromRiot: ChampionDto[] | undefined = await getChampionsObjectsFromRiot();
        if (championObjectsFromRiot === undefined) {
            throw Error;
        }
        const champion = findChampionById(championId, championObjectsFromRiot);
        if (!champion) {
            throw Error;
        }
        return convertToChampionType(championId, champion.name)
    } catch (error) {
        console.log(error);
        return null;
    }
}
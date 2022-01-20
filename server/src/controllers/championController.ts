import axios from "axios";
import { ChampionDto } from "../types/apiResponseDtos/championJson";
import { Champion } from "../types/Champion";
import { getChampionImageUrl } from "../utils/getUrl/images/getImageUrls";
import { getChampionsJsonUrl } from "../utils/getUrl/json/getJsonUrls";

const NO_CHAMPION_ID = -1; //챔피언 선택하지 않았을 때 보여지는 championId (ex. 챔피언 밴 안 함)

export const findChampionById = (idInNumber: number, champions: ChampionDto[]): ChampionDto | undefined => {
    const id: string = `${idInNumber}`; //json에는 champion ID가 string으로 저장되어있기 때문에 맞춰서 변환
    return champions.find(champion => champion.key === id)
}

export const getChampionsFromRiot = async (): Promise<ChampionDto[] | undefined> => {
    try {
        const url: string = getChampionsJsonUrl();
        const { data: { data: championsJsonFromRiot } } = await axios.get(url);
        return Object.values(championsJsonFromRiot);
    } catch (error) {
        console.log(error);
    }
}

export const getChampion = async (championId: number, championsFromRiot: ChampionDto[]): Promise<Champion | null> => {
    try {
        if (championId === NO_CHAMPION_ID) {
            return null;
        }
        const champion = findChampionById(championId, championsFromRiot);
        if (!champion) {
            throw Error;
        }
        return ({
            id: championId,
            name: champion.name,
            image: getChampionImageUrl(champion.image.full)
        })
    } catch (error) {
        console.log(error);
        return null;
    }
}
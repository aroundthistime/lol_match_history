import axios from "axios";
import { ChampionDto } from "../types/apiResponseDtos/championJson";
import { Champion } from "../types/Champion";
import { getChampionImageUrl } from "../utils/getUrl/images/getImageUrls";
import { getChampionsJsonUrl } from "../utils/getUrl/json/getJsonUrls";

const NO_CHAMPION_ID = -1; //챔피언 선택하지 않았을 때 보여지는 championId (ex. 챔피언 밴 안 함)

export const findTargetChampionObj = (champions: ChampionDto[], championId: string): ChampionDto | undefined => champions.find(champion => champion.key === championId)

export const getChampionInfos = async (championId: number): Promise<Champion | null> => {
    try {
        if (championId === NO_CHAMPION_ID) {
            return null;
        }
        const url: string = getChampionsJsonUrl();
        const { status, data: { data: championJson } } = await axios.get(url);
        if (status !== 200) {
            throw Error;
        }
        const championObjects: ChampionDto[] = Object.values(championJson);
        const targetChampion = findTargetChampionObj(championObjects, `${championId}`);//json에는 champion ID가 string으로 저장되어있기 때문에 맞춰서 변환
        if (!targetChampion) {
            throw Error;
        }
        return ({
            id: championId,
            name: targetChampion.name,
            image: getChampionImageUrl(championId)
        })
    } catch (error) {
        console.log(error);
        return null;
    }
}
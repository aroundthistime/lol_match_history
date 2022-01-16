import axios from "axios"
import { ParticipantDtoEndedGame } from "../types/apiResponseDtos/match"
import { Item } from "../types/Item"
import { getItemImageUrl } from "../utils/getUrl/images/getImageUrls"
import { getItemsJsonUrl } from "../utils/getUrl/json/getJsonUrls"

const getItemIdsList = (participant: ParticipantDtoEndedGame) => {
    return [
        participant.item0,
        participant.item1,
        participant.item2,
        participant.item3,
        participant.item4,
        participant.item5,
        participant.item6
    ]
}

const convertToItemType = (id: number, item: any): Item => {
    return ({
        id,
        name: item.name,
        image: getItemImageUrl(item.image.full)
    })
}

const getItemsJsonFromRiot = async () => {
    const url = getItemsJsonUrl();
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.log(error);
    }

}

const getItemById = (id: number, itemsJsonFromRiot: any): Item | null => {
    const itemObjectFromRiot = itemsJsonFromRiot[id];
    if (itemObjectFromRiot === undefined) {
        return null
    } else {
        return convertToItemType(id, itemObjectFromRiot)
    }
}

export const getPlayerItems = async (participant: ParticipantDtoEndedGame): Promise<(Item | null)[] | false> => {
    try {
        const itemIdsList: number[] = getItemIdsList(participant);
        const itemsJsonFromRiot = await getItemsJsonFromRiot();
        if (itemsJsonFromRiot == undefined) {
            throw Error
        }
        return Promise.all(itemIdsList.map((itemId) => getItemById(itemId, itemsJsonFromRiot)))
    } catch (error) {
        console.log(error);
        return false;
    }
}
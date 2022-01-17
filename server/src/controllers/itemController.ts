import axios from "axios"
import { ItemsDto } from "../types/apiResponseDtos/itemJson"
import { ParticipantDtoEndedMatch } from "../types/apiResponseDtos/match"
import { Item } from "../types/Item"
import { getItemImageUrl } from "../utils/getUrl/images/getImageUrls"
import { getItemsJsonUrl } from "../utils/getUrl/json/getJsonUrls"

const getItemIds = (participant: ParticipantDtoEndedMatch) => {
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

export const getItemsFromRiot = async (): Promise<ItemsDto | undefined> => {
    try {
        const url = getItemsJsonUrl();
        const { data: { data } } = await axios.get(url);
        return data;
    } catch (error) {
        return undefined
    }
}

const getItemById = (id: number, itemsFromRiot: any): Item | null => {
    const itemObjectFromRiot = itemsFromRiot[id]; //itemsFromRiot = Json
    if (itemObjectFromRiot === undefined) {
        return null
    } else {
        return convertToItemType(id, itemObjectFromRiot)
    }
}

export const getPlayerItems = async (participant: ParticipantDtoEndedMatch, itemsFromRiot: ItemsDto): Promise<(Item | null)[] | false> => {
    try {
        const itemIds: number[] = getItemIds(participant);
        return Promise.all(itemIds.map((itemId) => getItemById(itemId, itemsFromRiot)))
    } catch (error) {
        console.log(error);
        return false;
    }
}
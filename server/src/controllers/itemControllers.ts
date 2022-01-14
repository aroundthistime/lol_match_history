import axios from "axios"
import { ParticipantDtoEndedGame } from "../types/apiResponseDtos/match"
import { Item } from "../types/Item"
import { getItemImageUrl } from "../utils/getUrl/images/getImageUrls"
import { getItemsJonUrl } from "../utils/getUrl/json/getJsonUrls"

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

const getItemInfos = async (id: number, itemObject: any) => {
    return ({
        id,
        name: itemObject.name,
        image: getItemImageUrl(itemObject.image.full)
    })
}

export const getPlayerItems = async (participant: ParticipantDtoEndedGame): Promise<(Item | null)[] | false> => {
    try {
        const itemIdsList: number[] = getItemIdsList(participant);
        const url = getItemsJonUrl();
        const { data } = await axios.get(url)
        return Promise.all(itemIdsList.map((itemId) => {
            const itemObject = data[itemId];
            if (itemObject === undefined) {
                return null
            } else {
                return getItemInfos(itemId, itemObject)
            }
        }))
    } catch (error) {
        console.log(error);
        return false;
    }
}
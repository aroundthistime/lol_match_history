import axios from "axios";
import { PerkSlotDto, PerkStyleDto } from "../types/apiResponseDtos/perksJson";
import { PerksDtoCurrentGame } from "../types/apiResponseDtos/spectator";
import { Perks } from "../types/Perks";
import { Rune } from "../types/Rune";
import { getFullPerkImageUrl } from "../utils/getUrl/images/getImageUrls";
import { getPerksJsonUrl } from "../utils/getUrl/json/getJsonUrls";

const getSelectedPerkStyle = async (selectedPerkStyleId: number): Promise<PerkStyleDto | undefined> => {
    const url: string = getPerksJsonUrl();
    const { data: perkStylesList }: { data: PerkStyleDto[] } = await axios.get(url);
    return perkStylesList.find(perkStyle => perkStyle.id === selectedPerkStyleId);
}


const extractSelectedRunes = async (runeIds: number[], selectedPerkSlots: PerkSlotDto[]): Promise<Rune[]> => {
    let result = [];
    let perkSlotIndex = 0;
    let runeIdsIndex = 0;
    while (runeIdsIndex < runeIds.length && perkSlotIndex < selectedPerkSlots.length) {
        const runeIdToSearch = runeIds[runeIdsIndex]; //현재 찾고자 하는 룬의 id
        const searchResult = selectedPerkSlots[perkSlotIndex].runes.find(rune => rune.id === runeIdToSearch);
        if (searchResult) {
            const rune: Rune = {
                id: searchResult.id,
                name: searchResult.name,
                image: getFullPerkImageUrl(searchResult.icon)
            }
            result.push(rune)
            runeIdsIndex++;
        }
        perkSlotIndex++;
    }
    return result;
}

export const getPerks = async (runeIds: number[], perkStyleId: number) => {
    try {
        const selectedPerkStyle = await getSelectedPerkStyle(perkStyleId);
        if (selectedPerkStyle === undefined) {
            throw Error;
        }
        const selectedRunes: Rune[] = await extractSelectedRunes(runeIds, selectedPerkStyle.slots);
        const styleBrief = {
            id: selectedPerkStyle.id,
            name: selectedPerkStyle.name,
            image: getFullPerkImageUrl(selectedPerkStyle.icon)
        }
        return ({
            style: styleBrief,
            slots: selectedRunes
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}



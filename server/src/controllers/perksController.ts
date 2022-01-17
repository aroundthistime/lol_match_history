import axios from "axios";
import { PerkSlotDto, PerkStyleDto } from "../types/apiResponseDtos/perksJson";
import { Rune } from "../types/Rune";
import { getFullPerkImageUrl } from "../utils/getUrl/images/getImageUrls";
import { getPerksJsonUrl } from "../utils/getUrl/json/getJsonUrls";


const convertToRuneType = ({ id, name, icon }: { id: number, name: string, icon: string }): Rune => {
    return ({
        id,
        name,
        image: getFullPerkImageUrl(icon)
    })
}

const getSelectedRunesByIds = async (runeIds: number[], perkSlots: PerkSlotDto[]): Promise<Rune[]> => {
    let selectedRunes = [];
    let perkSlotsIndex = 0;
    let runeIdsIndex = 0;
    while (runeIdsIndex < runeIds.length && perkSlotsIndex < perkSlots.length) {
        const runeId = runeIds[runeIdsIndex]; //현재 찾고자 하는 룬의 id
        const searchResult = perkSlots[perkSlotsIndex].runes.find(rune => rune.id === runeId);
        if (searchResult) {
            const rune: Rune = convertToRuneType(searchResult);
            selectedRunes.push(rune)
            runeIdsIndex++;
        }
        perkSlotsIndex++;
    }
    return selectedRunes;
}

export const getPerkStylesFromRiot = async (): Promise<PerkStyleDto[] | undefined> => {
    try {
        const url: string = getPerksJsonUrl();
        const { data: perkStyles }: { data: PerkStyleDto[] } = await axios.get(url);
        return perkStyles;
    } catch (error) {
        console.log(error);
    }
}

const getPerkStyleById = (id: number, perkStyles: PerkStyleDto[]): PerkStyleDto | undefined => {
    return perkStyles.find(perkStyle => perkStyle.id === id);
}

export const getPerks = async (runeIds: number[], perkStyleId: number, perkStylesFromRiot: PerkStyleDto[]) => {
    try {
        const selectedPerkStyle = getPerkStyleById(perkStyleId, perkStylesFromRiot);
        if (selectedPerkStyle === undefined) {
            throw Error;
        }
        const selectedRunes: Rune[] = await getSelectedRunesByIds(runeIds, selectedPerkStyle.slots);
        return ({
            style: convertToRuneType(selectedPerkStyle),
            slots: selectedRunes
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}



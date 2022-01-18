import axios from "axios";
import { SummonerSpellDto } from "../types/apiResponseDtos/summonerSpellsJson";
import { SummonerSpell } from "../types/SummonerSpell";
import { getSummonerSpellImageUrl } from "../utils/getUrl/images/getImageUrls";
import { getSummonerSpellsJsonUrl } from "../utils/getUrl/json/getJsonUrls";

const convertToSummonerSpellType = (spellId: number, summonerSpell: SummonerSpellDto): SummonerSpell => {
    return ({
        id: spellId,
        name: summonerSpell.name,
        image: getSummonerSpellImageUrl(summonerSpell.id)
    })
}

const getPlayerSummonerSpell = (spellId: number, summonerSpells: SummonerSpellDto[]): SummonerSpell | false => {
    const summonerSpell: SummonerSpellDto | undefined = summonerSpells.find(summonerSpell => summonerSpell.key === `${spellId}`);
    if (summonerSpell === undefined) {
        return false
    } else {
        return convertToSummonerSpellType(spellId, summonerSpell);
    }
}

export const getSummonerSpellsFromRiot = async (): Promise<SummonerSpellDto[]> => {
    const url: string = getSummonerSpellsJsonUrl();
    const { data: { data: summonerSpellsJson } } = await axios.get(url);
    const summonerSpells: SummonerSpellDto[] = Object.values(summonerSpellsJson);
    return summonerSpells;
}

export const getPlayerSummonerSpellsByIds = async (spell1Id: number, spell2Id: number, summonerSpellsFromRiot: SummonerSpellDto[]): Promise<SummonerSpell[] | false> => {
    try {
        const summonerSpell1 = getPlayerSummonerSpell(spell1Id, summonerSpellsFromRiot);
        const summonerSpell2 = getPlayerSummonerSpell(spell2Id, summonerSpellsFromRiot);
        if (summonerSpell1 && summonerSpell2) {
            return [summonerSpell1, summonerSpell2];
        } else {
            return false
        }
    } catch {
        return false
    }

}
import axios from "axios";
import { SummonerSpellDto } from "../types/apiResponseDtos/summonerSpellsJson";
import { SummonerSpell } from "../types/Spell";
import { getSummonerSpellImageUrl } from "../utils/getUrl/images/getImageUrls";
import { getSummonerSpellsJsonUrl } from "../utils/getUrl/json/getJsonUrls";

const getPlayerSummonerSpell = (summonerSpells: SummonerSpellDto[], spellId: number): SummonerSpell | false => {
    const summonerSpell: SummonerSpellDto | undefined = summonerSpells.find(summonerSpell => summonerSpell.key === `${spellId}`);
    if (summonerSpell === undefined) {
        return false
    }
    return ({
        id: spellId,
        name: summonerSpell.name,
        image: getSummonerSpellImageUrl(summonerSpell.id)
    })
}

export const getPlayerSummonerSpells = async (spell1Id: number, spell2Id: number): Promise<SummonerSpell[] | false> => {
    try {
        const url: string = getSummonerSpellsJsonUrl();
        const { status, data: { data: summonerSpellsJson } } = await axios.get(url);
        if (status !== 200) {
            throw Error;
        }
        const summonerSpellObjects: SummonerSpellDto[] = Object.values(summonerSpellsJson);
        const summonerSpell1 = getPlayerSummonerSpell(summonerSpellObjects, spell1Id);
        const summonerSpell2 = getPlayerSummonerSpell(summonerSpellObjects, spell2Id);
        if (summonerSpell1 && summonerSpell2) {
            return [summonerSpell1, summonerSpell2];
        } else {
            return false
        }
    } catch {
        return false
    }

}
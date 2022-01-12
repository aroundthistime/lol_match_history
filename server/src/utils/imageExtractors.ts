import axios from "axios";

export const getProfileIconUri = (profileIconId: string): string => `http://127.0.0.1:${process.env.PORT}/static/img/profileicon/${profileIconId}.png`

export const getTierImageUrl = (tier) => {
    return `http://127.0.0.1:${process.env.PORT}/static/img/tiers/${tier}.png`
}

export const getSummonerSpellImageUrl = async (spellId, summonerSpellJson) => {
    try {
        let summonerSpell = Object.entries(summonerSpellJson).find(entry => {
            const [spellName, spellObj] = entry;
            return spellObj.key === spellId;
        })
        const summonerSpellName = summonerSpell[0];
        return `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/${summonerSpellName}.png`;
    } catch (error) {
        return false;
    }
}

export const getChampionImageUrl = async (championId, championJson) => {
    try {
        let champion = Object.entries(championJson).find(entry => {
            const [championName, championObj] = entry;
            return championObj.key === championId;
        })
        const championName = champion[0];
        return `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/${championName}.png`;
    } catch (error) {
        return false;
    }
}

export const getChampionRunes = async (runes, runeStyle, runeDatas) => {
    try {
        let currentRuneStyle = runeDatas.find(runeStyleObj => runeStyleObj.id === runeStyle);
        let selectedRunes = await runes.filter(rune =>
            currentRuneStyle.slots.some(runeOfCurrentStyle => runeOfCurrentStyle.id === rune.id));
        selectedRunes = await selectedRunes.map(selectedRune => ({
            ...selectedRune,
            image: `http://127.0.0.1:${process.env.PORT}/static/img/${selectedRune.icon}`
        }));

        return
    } catch (error) {
        return false
    }
}
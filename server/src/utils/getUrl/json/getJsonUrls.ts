import { VERSION } from "../../../controllers/globalControllers"

export const getSummonerSpellsJsonUrl = (): string =>
    `https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/ko_KR/summoner.json`

export const getChampionsJsonUrl = (): string =>
    `http://ddragon.leagueoflegends.com/cdn/${VERSION}/data/ko_KR/champion.json`

export const getPerksJsonUrl = (): string =>
    `https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/ko_KR/runesReforged.json`

export const getItemsJonUrl = (): string =>
    `https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/ko_KR/item.json`
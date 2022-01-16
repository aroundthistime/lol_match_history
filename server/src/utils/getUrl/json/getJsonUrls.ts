import { GAME_VERSION } from "../../../controllers/globalController"

export const getSummonerSpellsJsonUrl = (): string =>
    `https://ddragon.leagueoflegends.com/cdn/${GAME_VERSION}/data/ko_KR/summoner.json`

export const getChampionsJsonUrl = (): string =>
    `http://ddragon.leagueoflegends.com/cdn/${GAME_VERSION}/data/ko_KR/champion.json`

export const getPerksJsonUrl = (): string =>
    `https://ddragon.leagueoflegends.com/cdn/${GAME_VERSION}/data/ko_KR/runesReforged.json`

export const getItemsJsonUrl = (): string =>
    `https://ddragon.leagueoflegends.com/cdn/${GAME_VERSION}/data/ko_KR/item.json`
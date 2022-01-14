import { VERSION } from "../../../controllers/controllers"

export const getSummonerSpellsJsonUrl = (): string =>
    `https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/ko_KR/summoner.json`

export const getChampionsJsonUrl = (): string =>
    `http://ddragon.leagueoflegends.com/cdn/${VERSION}/data/ko_KR/champion.json`

export const getPerksJsonUrl = (): string =>
    `https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/ko_KR/runesReforged.json`
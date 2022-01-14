import { VERSION } from "../../../controllers/controllers"

export const getProfileIconUrl = (profileIconId: string): string =>
    `http://127.0.0.1:${process.env.PORT}/static/img/profileicon/${profileIconId}.png`

export const getTierImageUrl = (tier: string) =>
    `http://127.0.0.1:${process.env.PORT}/static/img/tiers/${tier}.png`

export const getChampionImageUrl = (championId: number): string =>
    `http://ddragon.leagueoflegends.com/cdn/${VERSION}/img/champion/${championId}.png`

export const getSummonerSpellImageUrl = (summonerSpellId: string): string =>
    `http://ddragon.leagueoflegends.com/cdn/${VERSION}/img/spell/${summonerSpellId}.png`

export const getFullPerkImageUrl = (icon: string): string =>
    `http://127.0.0.1:${process.env.PORT}/static/img/${icon}`

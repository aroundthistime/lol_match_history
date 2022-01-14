import Constants from "../../../constants/constants";

export const getUserInfoUrl = (username: string): string =>
    encodeURI(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${process.env.API_KEY}`);

export const getUserTierUrl = (summonerId: string): string =>
    `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${process.env.API_KEY}`

export const getCurrentMatchUrl = (summonerId: string): string =>
    `https://kr.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${summonerId}?api_key=${process.env.API_KEY}`

export const getEndedMatchListUrl = (summonerPuuid: string, page: number): string => {
    const count = Constants.units.fetch.match_fetch_unit
    const startIndex = (page - 1) * count;
    return `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerPuuid}/ids?start=${startIndex}&count=${count}&api_key=${process.env.API_KEY}`
}

export const getEndedMatchUrl = (matchId: string): string =>
    `https://asia.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${process.env.API_KEY}`
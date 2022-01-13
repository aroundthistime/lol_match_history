import { getChampionImageUrl, getProfileIconUri, getSummonerSpellImageUrl, getTierImageUrl } from "../utils/imageExtractors";

import axios from "axios";
import { Request, Response, NextFunction } from 'express';
import { User } from "../types/User";
import constants from "../constants/constants";
import { Tier } from "../types/Tier";
import { Tiers } from "../types/Tiers";
import { CurrentMatchFetch, FetchResult, TiersFetch, UserFetch } from "../types/FetchResult";
import { ErrorCode } from "../types/errorCode";
import { TierDto } from "../types/ApiResponseDtos";
import { TargetQueueType } from "../types/TargetQueueType";
import { TeamId } from "../types/TeamId";
import { QueueTypeId } from "../types/QueueTypeId";




const fetchUser = async (username: string): Promise<UserFetch> => {
    try {
        const url: string = encodeURI(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${process.env.API_KEY}`)
        const response = await axios.get(url);
        if (response.status === 200) {
            const {
                name,
                id,
                summonerLevel,
                accountId,
                puuid,
            } = response.data;
            const profileIcon: string = getProfileIconUri(response.data.profileIconId);
            const user: User = {
                name,
                profileIcon,
                accountId,
                id,
                puuid,
                summonerLevel
            };
            return ({
                result: true,
                user
            })
        } else {
            return handleFailedRequest(response.status);
        }
    } catch (error) {
        console.log(error);
        return ({
            result: false,
            errorCode: constants.codes.error.codeError
        })
    }
}

const handleFailedRequest = (statusCode: number): FetchResult => {
    let errorCode: ErrorCode;
    if (statusCode === 404) {
        errorCode = constants.codes.error.noResult; //해당 이름의 유저 없음
    } else if (statusCode === 403) {
        errorCode = constants.codes.error.apiExpired; //api키 만료
    } else {
        errorCode = constants.codes.error.unauthorized; //허가되지 않은 접근
    }
    return ({
        result: false,
        errorCode
    })
}

const extractTier = async (tiers: TierDto[], targetQueueType: TargetQueueType): Promise<Tier> => {
    const targetTier = tiers.find(tierObj => tierObj.queueType === targetQueueType);
    let result: Tier;
    if (targetTier === undefined) { //티어 정보가 없으면 언랭
        result = {
            tier: "UNRANKED",
            tierImage: getTierImageUrl('UNRANKED')
        }
    } else {
        result = {
            tier: targetTier.tier,
            tierImage: getTierImageUrl(targetTier.tier),
            rank: targetTier.rank,
            leaguePoints: targetTier.leaguePoints,
            wins: targetTier.wins,
            losses: targetTier.losses,
            miniSeries: targetTier.miniSeries
        }
    }
    return result;
}

const fetchUserTiers = async (summonerId: string): Promise<TiersFetch> => {
    try {
        const response = await axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${process.env.API_KEY}`);
        let solo: Tier;
        let team: Tier;
        if (response && response.status === 200 && response.data) {
            solo = await extractTier(response.data, TargetQueueType.RankedSolo);
            team = await extractTier(response.data, TargetQueueType.RankedTeam);
            return ({
                result: true,
                tiers: {
                    solo,
                    team
                }
            })
        } else {
            return handleFailedRequest(response.status);
        }
    } catch (error) {
        return ({
            result: false,
            errorCode: constants.codes.error.codeError
        })
    }
}

const getSummonerSpellImages = async (players) => {
    const summonerSpellResponse = await axios.get("https://ddragon.leagueoflegends.com/cdn/10.6.1/data/en_US/summoner.json");
    try {
        const summonerSpellJson = summonerSpellResponse.data.data;
        return Promise.all(players.map(async (player) => {
            const summonerSpell1Image = await getSummonerSpellImageUrl(`${player.spell1Id}`, summonerSpellJson);//json에는 spell ID가 string으로 저장되어있기 때문에 맞춰서 변환
            const summonerSpell2Image = await getSummonerSpellImageUrl(`${player.spell2Id}`, summonerSpellJson);
            return ({
                ...player,
                spell1Image: summonerSpell1Image,
                spell2Image: summonerSpell2Image
            });
        }))
    } catch (error) {
        return false
    }
}

const getChampionImages = async (players) => {
    const championResponse = await axios.get("http://ddragon.leagueoflegends.com/cdn/12.1.1/data/en_US/champion.json");
    try {
        const championJson = championResponse.data.data;
        return Promise.all(players.map(async (player) => {
            const championImage = await getChampionImageUrl(`${player.championId}`, championJson); //json에는 champion ID가 string으로 저장되어있기 때문에 맞춰서 변환
            return ({
                ...player,
                championImage
            });
        }))
    } catch (error) {
        console.log(error);
        return false;
    }
}

const getRunes = async (players) => {
    const response = await axios.get('https://ddragon.leagueoflegends.com/cdn/10.6.1/data/en_US/runesReforged.json');
    try {
        const runeDatas = response.data;
        return Promise.all(players.map(async (player) => {
            const mainRunes = await getChampionRunes(player.perks, perkIds, player.perks.perkStyle, runeDatas);
            const subRunes = await getChampionRunes(player.perks, perkIds, player.perks.perkSubStyle, runeDatas);
            return ({
                ...player,
                championImage
            });
        }))
    } catch (error) {
        return false;
    }
}

const extractGamePlayerInfos = async (playersParameter) => {
    let players = await getSummonerSpellImages(playersParameter);
    players = await getChampionImages(players);
    players = await getChampionRunes(players);
    // console.log(players)
    const blueTeamId: TeamId = constants.codes.teamId.blue;
    const redTeamId: TeamId = constants.codes.teamId.red;
    const blueTeam = await players.filter(player => player.teamId === blueTeamId);
    const redTeam = await players.filter(player => player.teamId === redTeamId);
    console.log(blueTeam);
    return ({
        blue: blueTeam,
        red: redTeam
    })
}


const fetchCurrentMatch = async (summonerId: string): Promise<CurrentMatchFetch> => {
    try {
        const response = await axios.get(`https://kr.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${summonerId}?api_key=${process.env.API_KEY}`);
        if (response.status === 200) {
            const QueueTypeId: QueueTypeId = response.data.gameQueueConfigId;
            const gameModeEng = constants.codes.queueTypes[queueTypeId];
            const gameModeKor = QUEUE_TYPES_KOREAN[gameModeEng];
            const gamePlayers = await extractGamePlayerInfos(response.data.participants);
            return ({
                gameLength: response.data.gameLength,
                gameMode: gameModeKor,
                players: gamePlayers
            })
        } else {
            return handleFailedRequest(response.status);
        }
    } catch (error) { //no current games or API KEY expired
        return ({
            result: false,
            errorCode: constants.codes.error.codeError
        })
    }
}

export const fetchByUsername = async (req: Request, res: Response) => {
    const {
        params: { username }
    } = req;
    let result: UserFetch;
    let userFetchResult: UserFetch = await fetchUser(username);
    if (!userFetchResult.result || userFetchResult.user === undefined) { //해당 이름의 소환사가 있으면
        res.json({
            result: false,
            errorCode: userFetchResult.errorCode
        })
        return;
    }
    const user: User = userFetchResult.user;
    const tiersFetchResult: TiersFetch = await fetchUserTiers(user.id);
    if (!tiersFetchResult.result || tiersFetchResult.tiers === undefined) {
        res.json({
            result: false,
            errorCode: tiersFetchResult.errorCode
        })
        return;
    }
    const currentMatchFetchResult: CurrentMatchFetch = await fetchCurrentMatch(user.id);
    result = {
        result: true,
        user: {
            ...user,
            tiers: tiersFetchResult.tiers,
            currentMatch
        }
    }
    res.json(result);
}
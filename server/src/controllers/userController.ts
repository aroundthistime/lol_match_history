import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { TierDto } from '../types/apiResponseDtos/league';
import { EndedMatchFetch, TiersFetch, UserFetch } from '../types/FetchResult';
import { Match } from '../types/Match';
import { TargetQueueType } from '../types/TargetQueueType';
import { Tier } from '../types/Tier';
import { SearchTargetUser } from '../types/User';
import { getProfileIconUrl, getTierImageUrl } from '../utils/getUrl/images/getImageUrls';
import { getUserInfoUrl, getUserTierUrl } from '../utils/getUrl/riotApi/getRiotApiUrls';
import { fetchCurrentMatch } from './currentMatchControllers';
import { fetchEndedMatches } from './endedMatchControllers';
import { CODE_ERROR_RESULT, handleFailedRequest } from './globalControllers';


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
        const url: string = getUserTierUrl(summonerId);
        const response = await axios.get(url);
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
        console.log(error);
        return CODE_ERROR_RESULT;
    }
}



const fetchUser = async (username: string): Promise<UserFetch> => {
    try {
        const url: string = getUserInfoUrl(username);
        const response = await axios.get(url);
        if (response.status === 200) {
            const {
                name,
                id,
                summonerLevel,
                accountId,
                puuid,
            } = response.data;
            const profileIcon: string = getProfileIconUrl(response.data.profileIconId);
            const user: SearchTargetUser = {
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
        return CODE_ERROR_RESULT
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
    const user: SearchTargetUser = userFetchResult.user;
    const tiersFetchResult: TiersFetch = await fetchUserTiers(user.id);
    if (!tiersFetchResult.result || tiersFetchResult.tiers === undefined) {
        res.json({
            result: false,
            errorCode: tiersFetchResult.errorCode
        })
        return;
    }
    const currentMatch: Match | null = await fetchCurrentMatch(user.id);
    const endedGamesFetchResult: EndedMatchFetch = await fetchEndedMatches(user.puuid, user.id);
    if (!endedGamesFetchResult.result) {
        res.json({
            result: false,
            errorCode: endedGamesFetchResult.errorCode
        })
        return
    }
    result = {
        result: true,
        user: {
            ...user,
            tiers: tiersFetchResult.tiers,
            currentMatch: currentMatch,
            latestMatches: endedGamesFetchResult.Matches
        }
    }
    res.json(result);
}
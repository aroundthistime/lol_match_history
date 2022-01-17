import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { TierDto } from '../types/apiResponseDtos/league';
import { EndedMatchFetchResult, TiersFetchResult, UserFetchResult } from '../types/FetchResult';
import { Match } from '../types/Match';
import { TargetQueueType } from '../types/TargetQueueType';
import { Tier } from '../types/Tier';
import { SearchTargetUser } from '../types/User';
import { getProfileIconUrl, getTierImageUrl } from '../utils/getUrl/images/getImageUrls';
import { getUserInfoUrl, getUserTierUrl } from '../utils/getUrl/riotApi/getRiotApiUrls';
import { getCurrentMatch } from './currentMatchController';
import { getEndedMatches } from './endedMatchController';
import { CODE_ERROR_RESULT, getDetailDatasFromRiot, getFailedFetchResultByStatusCode } from './globalController';


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

const getUserTiers = async (summonerId: string): Promise<TiersFetchResult> => {
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
            return getFailedFetchResultByStatusCode(response.status);
        }
    } catch (error) {
        console.log(error);
        return CODE_ERROR_RESULT;
    }
}



const getUser = async (username: string): Promise<UserFetchResult> => {
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
            return getFailedFetchResultByStatusCode(response.status);
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
    let result: UserFetchResult;
    let userFetchResult: UserFetchResult = await getUser(username);
    if (!userFetchResult.result || userFetchResult.user === undefined) { //해당 이름의 소환사가 있으면
        res.json({
            result: false,
            errorCode: userFetchResult.errorCode
        })
        return;
    }
    const user: SearchTargetUser = userFetchResult.user;
    const tiersFetchResult: TiersFetchResult = await getUserTiers(user.id);
    if (!tiersFetchResult.result || tiersFetchResult.tiers === undefined) {
        res.json({
            result: false,
            errorCode: tiersFetchResult.errorCode
        })
        return;
    }
    const detailDatasFromRiot = await getDetailDatasFromRiot();
    if (detailDatasFromRiot === null) {
        res.json(CODE_ERROR_RESULT);
        return;
    }
    const currentMatch: Match | null = await getCurrentMatch(user.id, detailDatasFromRiot);
    const endedMatchsFetchResult: EndedMatchFetchResult = await getEndedMatches(user.puuid, user.id, detailDatasFromRiot);
    if (!endedMatchsFetchResult.result) {
        res.json({
            result: false,
            errorCode: endedMatchsFetchResult.errorCode
        })
        return
    }
    result = {
        result: true,
        user: {
            ...user,
            tiers: tiersFetchResult.tiers,
            currentMatch: currentMatch,
            latestMatches: endedMatchsFetchResult.Matches
        }
    }
    res.json(result);
}
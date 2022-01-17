import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { TierDto } from '../types/apiResponseDtos/league';
import { UserFetchResult } from '../types/FetchResult';
import { Match } from '../types/Match';
import { TargetQueueType } from '../types/TargetQueueType';
import { Tier } from '../types/Tier';
import { Tiers } from '../types/Tiers';
import { SearchTargetUser } from '../types/User';
import { defineWhetherNoDataOrError } from '../utils/errorHandler';
import { getProfileIconUrl, getTierImageUrl } from '../utils/getUrl/images/getImageUrls';
import { getUserInfoUrl, getUserTierUrl } from '../utils/getUrl/riotApi/getRiotApiUrls';
import { getCurrentMatch } from './currentMatchController';
import { getEndedMatches } from './endedMatchController';
import { FAILED_RESULT, getDetailDatasFromRiot } from './globalController';


const getUnrankedTier = (): Tier => {
    return ({
        tier: "UNRANKED",
        tierImage: getTierImageUrl('UNRANKED')
    })
}

const getRankedTier = (tier: TierDto): Tier => {
    return ({
        tier: tier.tier,
        tierImage: getTierImageUrl(tier.tier),
        rank: tier.rank,
        leaguePoints: tier.leaguePoints,
        wins: tier.wins,
        losses: tier.losses,
        miniSeries: tier.miniSeries
    })
}

const getTier = (tiers: TierDto[], targetQueueType: TargetQueueType): Tier => {
    const tier = tiers.find(tierObj => tierObj.queueType === targetQueueType);
    if (tier === undefined) { //티어 정보가 없으면 언랭
        return getUnrankedTier()
    } else { //언랭이 아닌 티어
        return getRankedTier(tier);
    }
}

const getUserTierDatas = async (summonerId: string) => {
    const url: string = getUserTierUrl(summonerId);
    const { data } = await axios.get(url);
    return data
}

const getUserTiers = async (summonerId: string): Promise<Tiers | false> => {
    try {
        const tiersData = await getUserTierDatas(summonerId);
        const solo: Tier = getTier(tiersData, TargetQueueType.RankedSolo);
        const team: Tier = getTier(tiersData, TargetQueueType.RankedTeam);
        return ({
            solo,
            team
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}

const getUserData = async (username: string) => {
    try {
        const url: string = getUserInfoUrl(username);
        const { data } = await axios.get(url);
        return data
    } catch (error) {
        return defineWhetherNoDataOrError(error);
    }
}


const getUser = async (username: string): Promise<SearchTargetUser | null | false> => {
    try {
        const userData = await getUserData(username);
        if (userData === null) {
            return null
        } else if (userData === false) {
            throw Error
        }
        const profileIcon: string = getProfileIconUrl(userData.profileIconId);
        const user: SearchTargetUser = {
            name: userData.name,
            profileIcon,
            accountId: userData.accountId,
            id: userData.id,
            puuid: userData.puuid,
            summonerLevel: userData.summonerLevel
        };
        return user;
    } catch (error) {
        return false
    }
}

export const fetchByUsername = async (req: Request, res: Response) => {
    try {
        const {
            params: { username }
        } = req;
        const user: SearchTargetUser | null | false = await getUser(username);
        if (user === null) {
            res.json({
                result: true,
                user
            })
            return
        } else if (user === false) {
            throw Error
        }
        const tiers: Tiers | false = await getUserTiers(user.id);
        if (tiers === false) {
            throw Error;
        }
        const detailDatasFromRiot = await getDetailDatasFromRiot();
        if (detailDatasFromRiot === null) {
            throw Error
        }
        const currentMatch: Match | null | false = await getCurrentMatch(user.id, detailDatasFromRiot);
        if (currentMatch === false) {
            throw Error
        }
        const endedMatchs: Match[] | false = await getEndedMatches(user.puuid, user.id, detailDatasFromRiot);
        if (endedMatchs === false) {
            throw Error
        }
        const result: UserFetchResult = {
            result: true,
            user: {
                ...user,
                tiers,
                currentMatch: currentMatch,
                latestMatches: endedMatchs
            }
        }
        res.json(result);
    } catch (error) {
        res.json(FAILED_RESULT)
    }
}
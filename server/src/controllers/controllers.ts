import { getChampionImageUrl, getProfileIconUri, getSummonerSpellImageUrl, getTierImageUrl } from "../utils/imageExtractors";

import axios from "axios";
import { Request, Response, NextFunction } from 'express';
import { User } from "../types/User";
import constants from "../constants/constants";
import { Tier } from "../types/Tier";
import { Tiers } from "../types/Tiers";
import { CurrentMatchFetch, FetchResult, TiersFetch, UserFetch } from "../types/FetchResult";
import { ErrorCode } from "../types/errorCode";
import { ChampionDto, ParticipantDto, SummonerSpellDto, TierDto } from "../types/ApiResponseDtos";
import { TargetQueueType } from "../types/TargetQueueType";
import { TeamId } from "../types/TeamId";
import { QueueTypeEng, QueueTypeId, QueueTypeKor } from "../types/QueueType";
import { Player } from "../types/Player";
import { Champion } from "../types/Champion";
import { Spell } from "../types/Spell";




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


const findTargetChampionObj = (champions: ChampionDto[], championId: string): ChampionDto => champions.find(champion => champion.key === championId)

const getChampionInfos = async (championId: number): Promise<Champion | false> => {
    try {
        const { status, data: { data: championJson } } = await axios.get("http://ddragon.leagueoflegends.com/cdn/12.1.1/data/ko_KR/champion.json");
        if (status !== 200) {
            throw Error;
        }
        const championObjects: ChampionDto[] = Object.values(championJson);
        const targetChampion = findTargetChampionObj(championObjects, `${championId}`);//json에는 champion ID가 string으로 저장되어있기 때문에 맞춰서 변환
        return ({
            id: championId,
            name: targetChampion.name,
            image: `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/${champion.id}.png`
        })
    } catch (error) {
        return false;
    }
}

// const extractPlayerRunes = async

const getPlayerSummonerSpell = async (summonerSpells: SummonerSpellDto[], spellId: number): Spell | false => {
    const summonerSpell: SummonerSpellDto | undefined = summonerSpells.find(summonerSpell => summonerSpell.key === `${spellId}`);
    if (summonerSpell === undefined) {
        return false
    }
    return ({
        id: spellId,
        name: summonerSpell.name,
        image: `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/${summonerSpell.id}.png`;
    })
}

const getPlayerSummonerSpells = async (spell1Id: number, spell2Id: number): Promise<Spell[] | false> => {
    try {
        const { status, data: { data: summonerSpellsJson } } = await axios.get("https://ddragon.leagueoflegends.com/cdn/10.6.1/data/ko_KR/summoner.json");
        if (status !== 200) {
            throw Error;
        }
        const summonerSpellObjects: SummonerSpellDto[] = Object.values(summonerSpellsJson);
        const summonerSpell1 = getPlayerSummonerSpell(summonerSpellObjects, spell1Id);
        const summonerSpell2 = getPlayerSummonerSpell(summonerSpellObjects, spell2Id);
        if (summonerSpell1 && summonerSpell2) {
            return [summonerSpell1, summonerSpell2];
        } else {
            return false
        }
    } catch {
        return false
    }

}

const extractGamePlayerInfos = async (participants: ParticipantDto[], targetSummonerId: string | undefined) => {
    return Promise.all(participants.map(async (participant) => {
        const champion = await getChampionInfos(participant.championId);
        // const mainPerks = await get
        return ({
            champion
        })
    }))
}


const fetchCurrentMatch = async (summonerId: string): Promise<CurrentMatchFetch> => {
    try {
        const response = await axios.get(`https://kr.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${summonerId}?api_key=${process.env.API_KEY}`);
        if (response.status === 200) {
            const queueTypeId: QueueTypeId = response.data.gameQueueConfigId;
            const gameModeEng: QueueTypeEng = constants.codes.queueType[queueTypeId];
            const gameModeKor: QueueTypeKor = constants.korean.queueType[gameModeEng];
            const gamePlayers: Player[] = await extractGamePlayerInfos(response.data.participants, summonerId);
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
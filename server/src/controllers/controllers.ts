import { getProfileIconUri, getTierImageUrl } from "../utils/imageExtractors";

import axios from "axios";
import { Request, Response, NextFunction } from 'express';
import { User } from "../types/User";
import constants from "../constants/constants";
import { Tier } from "../types/Tier";
import { CurrentMatchFetch, FetchResult, TiersFetch, UserFetch } from "../types/FetchResult";
import { ErrorCode } from "../types/errorCode";
import { BannedChampionsCurrentGame, ChampionDto, ParticipantDtoCurrentGame, PerksDtoCurrentGame, PerkSlotDto, PerkStyleDto, SummonerSpellDto, TierDto } from "../types/ApiResponseDtos";
import { TargetQueueType } from "../types/TargetQueueType";
import { QueueTypeEng, QueueTypeId, QueueTypeKor } from "../types/QueueType";
import { Player } from "../types/Player";
import { Champion } from "../types/Champion";
import { Rune } from "../types/Rune";
import { Perks } from "../types/Perks";
import { Match } from "../types/Match";
import { Team } from "../types/Team";
import { SummonerSpell } from "../types/Spell";


const VERSION = "12.1.1";

const NO_CHAMPION_ID = -1;

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
        console.log(error);
        return ({
            result: false,
            errorCode: constants.codes.error.codeError
        })
    }
}


const findTargetChampionObj = (champions: ChampionDto[], championId: string): ChampionDto | undefined => champions.find(champion => champion.key === championId)

const getChampionInfos = async (championId: number): Promise<Champion | null> => {
    try {
        if (championId === NO_CHAMPION_ID) {
            return null;
        }
        const { status, data: { data: championJson } } = await axios.get(`http://ddragon.leagueoflegends.com/cdn/${VERSION}/data/ko_KR/champion.json`);
        if (status !== 200) {
            throw Error;
        }
        const championObjects: ChampionDto[] = Object.values(championJson);
        const targetChampion = findTargetChampionObj(championObjects, `${championId}`);//json에는 champion ID가 string으로 저장되어있기 때문에 맞춰서 변환
        if (!targetChampion) {
            throw Error;
        }
        return ({
            id: championId,
            name: targetChampion.name,
            image: `http://ddragon.leagueoflegends.com/cdn/${VERSION}/img/champion/${championId}.png`
        })
    } catch (error) {
        console.log(error);
        return null;
    }
}

// const extractPlayerRunes = async

const getPlayerSummonerSpell = (summonerSpells: SummonerSpellDto[], spellId: number): SummonerSpell | false => {
    const summonerSpell: SummonerSpellDto | undefined = summonerSpells.find(summonerSpell => summonerSpell.key === `${spellId}`);
    if (summonerSpell === undefined) {
        return false
    }
    return ({
        id: spellId,
        name: summonerSpell.name,
        image: `http://ddragon.leagueoflegends.com/cdn/${VERSION}/img/spell/${summonerSpell.id}.png`
    })
}

const getPlayerSummonerSpells = async (spell1Id: number, spell2Id: number): Promise<SummonerSpell[] | false> => {
    try {
        const { status, data: { data: summonerSpellsJson } } = await axios.get(`https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/ko_KR/summoner.json`);
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

const getSelectedPerkStyle = async (selectedPerkStyleId: number): Promise<PerkStyleDto | undefined> => {
    const { data: perkStylesList }: { data: PerkStyleDto[] } = await axios.get(`https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/ko_KR/runesReforged.json`);
    return perkStylesList.find(perkStyle => perkStyle.id === selectedPerkStyleId);
}

const getFullPerkImagePath = (icon: string): string =>
    `http://127.0.0.1:${process.env.PORT}/static/img/${icon}`

const extractSelectedRunes = async (runeIds: number[], selectedPerkSlots: PerkSlotDto[]): Promise<Rune[]> => {
    let result = [];
    let perkSlotIndex = 0;
    let runeIdsIndex = 0;
    while (runeIdsIndex < runeIds.length && perkSlotIndex < selectedPerkSlots.length) {
        const runeIdToSearch = runeIds[runeIdsIndex]; //현재 찾고자 하는 룬의 id
        const searchResult = selectedPerkSlots[perkSlotIndex].runes.find(rune => rune.id === runeIdToSearch);
        if (searchResult) {
            const rune: Rune = {
                id: searchResult.id,
                name: searchResult.name,
                image: getFullPerkImagePath(searchResult.icon)
            }
            result.push(rune)
            runeIdsIndex++;
        }
        perkSlotIndex++;
    }
    return result;
}

const getPerks = async (runeIds: number[], perkStyleId: number) => {
    try {
        const selectedPerkStyle = await getSelectedPerkStyle(perkStyleId);
        if (selectedPerkStyle === undefined) {
            throw Error;
        }
        const selectedRunes: Rune[] = await extractSelectedRunes(runeIds, selectedPerkStyle.slots);
        const styleBrief = {
            id: selectedPerkStyle.id,
            name: selectedPerkStyle.name,
            image: getFullPerkImagePath(selectedPerkStyle.icon)
        }
        return ({
            style: styleBrief,
            slots: selectedRunes
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}

const getCurrentGamePerks = async (perks: PerksDtoCurrentGame): Promise<(Perks | false)[]> => {
    const mainPerkIds = perks.perkIds.slice(0, 4);
    const subPerkIds = perks.perkIds.slice(4, 6);
    const mainPerks = await getPerks(mainPerkIds, perks.perkStyle);
    const subPerks = await getPerks(subPerkIds, perks.perkSubStyle);
    return [mainPerks, subPerks]
}

const extractCurrentGamePlayerInfos = async (participants: ParticipantDtoCurrentGame[], targetSummonerId: string | undefined) => {
    try {
        return Promise.all(participants.map(async (participant) => {
            const champion = await getChampionInfos(participant.championId);
            if (champion === null) {
                throw Error;
            }
            const summonerSpells = await getPlayerSummonerSpells(participant.spell1Id, participant.spell2Id);
            if (summonerSpells === false) {
                throw Error
            }
            const [mainPerks, subPerks] = await getCurrentGamePerks(participant.perks);
            if (!mainPerks || !subPerks) {
                throw Error
            }
            return ({
                name: participant.summonerName,
                id: participant.summonerId,
                isSearchTarget: participant.summonerId === targetSummonerId,
                isBlueTeam: participant.teamId === constants.codes.teamId.blue,
                champion,
                mainPerks,
                subPerks,
                summonerSpells
            })
        }))
    } catch (error) {
        console.log(error);
        return false
    }

}

const filterBansByTeamId = (bannedChampions: BannedChampionsCurrentGame[], teamId: number) =>
    bannedChampions.filter(bannedChampion => bannedChampion.teamId === teamId);

const addChampionInfosToBanList = async (bannedChampions: BannedChampionsCurrentGame[]): Promise<(Champion | null)[]> => {
    return Promise.all(bannedChampions.map(async (bannedChampion) => {
        return getChampionInfos(bannedChampion.championId)
    }))
}

const getCurrentGameBans = async (bannedChampions: BannedChampionsCurrentGame[]): Promise<(Champion | null)[][]> => {
    const blueTeamId = constants.codes.teamId.blue;
    const redTeamId = constants.codes.teamId.red;
    const blueTeamBans = filterBansByTeamId(bannedChampions, blueTeamId);
    const redTeamBans = filterBansByTeamId(bannedChampions, redTeamId);
    const blueTeamBansWithChampionInfos = await addChampionInfosToBanList(blueTeamBans);
    const redTeamBansWithChampionInfos = await addChampionInfosToBanList(redTeamBans);
    return [blueTeamBansWithChampionInfos, redTeamBansWithChampionInfos]
}

const extractCurrentGameTeamsInfo = async (bannedChampions: BannedChampionsCurrentGame[]): Promise<Team[]> => {
    const [blueTeamBans, redTeamBans] = await getCurrentGameBans(bannedChampions);
    const blueTeam: Team = {
        isBlueTeam: true,
        bans: blueTeamBans
    };
    const redTeam: Team = {
        isBlueTeam: false,
        bans: redTeamBans
    }
    return [blueTeam, redTeam]
}


const fetchCurrentMatch = async (summonerId: string): Promise<CurrentMatchFetch> => {
    try {
        const response = await axios.get(`https://kr.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${summonerId}?api_key=${process.env.API_KEY}`);
        if (response.status === 200) {
            const currentMatchData = response.data;
            const queueTypeId: QueueTypeId = currentMatchData.gameQueueConfigId;
            const gameModeEng: QueueTypeEng = constants.codes.queueType[queueTypeId];
            const gameModeKor: QueueTypeKor = constants.korean.queueType[gameModeEng];
            const gamePlayers: Player[] | false = await extractCurrentGamePlayerInfos(currentMatchData.participants, summonerId);
            if (!gamePlayers) {
                throw Error
            }
            const [blueTeam, redTeam]: Team[] = await extractCurrentGameTeamsInfo(currentMatchData.bannedChampions)
            const currentMatch: Match = {
                id: currentMatchData.gameId,
                gameMode: gameModeKor,
                gameStartTime: currentMatchData.gameStartTime,
                gameLength: currentMatchData.gameLength,
                participants: gamePlayers,
                blueTeam,
                redTeam
            }
            return ({
                result: true,
                currentMatch
            })
        } else {
            return handleFailedRequest(response.status);
        }
    } catch (error) { //no current games or API KEY expired
        console.log(error);
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
    if (!currentMatchFetchResult.result) {
        res.json({
            result: false,
            errorCode: currentMatchFetchResult.errorCode
        });
        return;
    }
    result = {
        result: true,
        user: {
            ...user,
            tiers: tiersFetchResult.tiers,
            currentMatch: currentMatchFetchResult.currentMatch
        }
    }
    res.json(result);
}
import axios from "axios";
import e, { Request, Response, NextFunction } from 'express';
import { User } from "../types/User";
import constants from "../constants/constants";
import { Tier } from "../types/Tier";
import { CurrentMatchFetch, EndedMatchFetch, FetchResult, TiersFetch, UserFetch } from "../types/FetchResult";
import { ErrorCode } from "../types/errorCode";
import { TargetQueueType } from "../types/TargetQueueType";
import { QueueTypeEng, QueueTypeId, QueueTypeKor } from "../types/QueueType";
import { Player } from "../types/Player";
import { Champion } from "../types/Champion";
import { Rune } from "../types/Rune";
import { Perks } from "../types/Perks";
import { Match } from "../types/Match";
import { CurrentGameTeam, EndedGameTeam } from "../types/Team";
import { SummonerSpell } from "../types/Spell";
import { getChampionsJsonUrl, getPerksJsonUrl, getSummonerSpellsJsonUrl } from "../utils/getUrl/json/getJsonUrls";
import { getCurrentMatchUrl, getEndedMatchListUrl, getEndedMatchUrl, getUserInfoUrl, getUserTierUrl } from "../utils/getUrl/riotApi/getRiotApiUrls";
import { getChampionImageUrl, getFullPerkImageUrl, getProfileIconUrl, getSummonerSpellImageUrl, getTierImageUrl } from "../utils/getUrl/images/getImageUrls";
import { getKda, getKillParticipation } from "../utils/calculation";
import { TierDto } from "../types/apiResponseDtos/league";
import { ChampionDto } from "../types/apiResponseDtos/championJson";
import { SummonerSpellDto } from "../types/apiResponseDtos/summonerSpellsJson";
import { PerkSlotDto, PerkStyleDto } from "../types/apiResponseDtos/perksJson";
import { BannedChampionsCurrentGame, ParticipantDtoCurrentGame, PerksDtoCurrentGame } from "../types/apiResponseDtos/spectator";
import { BanDto, MatchPerkStyleDto, ObjectivesDto, ParticipantDtoEndedGame, PerkStyleSelectionDto, TeamDto } from "../types/apiResponseDtos/match";
import { stringNumberDict } from "../types/StringNumberDict";
import { Item } from "../types/Item";

export const VERSION = "12.1.1";

const NO_CHAMPION_ID = -1;

const CODE_ERROR_RESULT = {
    result: false,
    errorCode: constants.codes.error.codeError
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
        return CODE_ERROR_RESULT
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
    return CODE_ERROR_RESULT;
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


const findTargetChampionObj = (champions: ChampionDto[], championId: string): ChampionDto | undefined => champions.find(champion => champion.key === championId)

const getChampionInfos = async (championId: number): Promise<Champion | null> => {
    try {
        if (championId === NO_CHAMPION_ID) {
            return null;
        }
        const url: string = getChampionsJsonUrl();
        const { status, data: { data: championJson } } = await axios.get(url);
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
            image: getChampionImageUrl(championId)
        })
    } catch (error) {
        console.log(error);
        return null;
    }
}


const getPlayerSummonerSpell = (summonerSpells: SummonerSpellDto[], spellId: number): SummonerSpell | false => {
    const summonerSpell: SummonerSpellDto | undefined = summonerSpells.find(summonerSpell => summonerSpell.key === `${spellId}`);
    if (summonerSpell === undefined) {
        return false
    }
    return ({
        id: spellId,
        name: summonerSpell.name,
        image: getSummonerSpellImageUrl(summonerSpell.id)
    })
}

const getPlayerSummonerSpells = async (spell1Id: number, spell2Id: number): Promise<SummonerSpell[] | false> => {
    try {
        const url: string = getSummonerSpellsJsonUrl()
        const { status, data: { data: summonerSpellsJson } } = await axios.get(url);
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
    const url: string = getPerksJsonUrl();
    const { data: perkStylesList }: { data: PerkStyleDto[] } = await axios.get(url);
    return perkStylesList.find(perkStyle => perkStyle.id === selectedPerkStyleId);
}


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
                image: getFullPerkImageUrl(searchResult.icon)
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
            image: getFullPerkImageUrl(selectedPerkStyle.icon)
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

const extractCommontPlayerParts = (participant: ParticipantDtoCurrentGame | ParticipantDtoEndedGame, targetSummonerId: string | undefined) => {
    return ({
        name: participant.summonerName,
        id: participant.summonerId,
        isSearchTarget: participant.summonerId === targetSummonerId,
        isBlueTeam: participant.teamId === constants.codes.teamId.blue,
    })
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
                ...extractCommontPlayerParts(participant, targetSummonerId),
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

const extractEndedGamePerkIds = async (selectedRuneList: PerkStyleSelectionDto[]): Promise<number[]> => {
    return selectedRuneList.map(selection => selection.perk)
}

const getEndedGamePerks = async (perkStylesList: MatchPerkStyleDto[]): Promise<(Perks | false)[]> => {
    const mainPerkStyle = perkStylesList[0];
    const subPerkStyle = perkStylesList[1];
    const mainPerkIds = await extractEndedGamePerkIds(mainPerkStyle.selections);
    const subPerkIds = await extractEndedGamePerkIds(subPerkStyle.selections)
    const mainPerks = await getPerks(mainPerkIds, mainPerkStyle.style);
    const subPerks = await getPerks(subPerkIds, subPerkStyle.style);
    return [mainPerks, subPerks]
}




const getEndedGamePlayerStatistics = async (participant: ParticipantDtoEndedGame, teamTotalKills: number) => {
    return {
        championLevel: participant.champLevel,
        kills: participant.kills,
        deaths: participant.deaths,
        assists: participant.assists,
        kda: getKda(participant.kills, participant.deaths, participant.assists),
        killParticipation: getKillParticipation(participant.kills, participant.assists, teamTotalKills),
        goldEarned: participant.goldEarned,
        cs: participant.totalMinionsKilled,
        totalDamageDealt: participant.totalDamageDealt,
        totalDamageTaken: participant.totalDamageTaken,
        wardsPlaced: participant.wardsPlaced,
        wardsKilled: participant.wardsKilled,
        detectorWardsPlaced: participant.detectorWardsPlaced,
        visionScore: participant.visionScore
    }
}

const getItemIdsList = (participant: ParticipantDtoEndedGame) => {
    return [
        participant.item0,
        participant.item1,
        participant.item2,
        participant.item3,
        participant.item4,
        participant.item5,
        participant.item6
    ]
}

const getItemInfos = async (participant: ParticipantDtoEndedGame): Promise<Item[]> => {
    const itemIdsList = getItemIdsList(participant);

    // return 
}

const extractEndedGamePlayerInfos = async (participants: ParticipantDtoEndedGame[], targetSummonerId: string, blueTeamChampionKills: number, redTeamChampionKills: number) => {
    try {
        return Promise.all(participants.map(async (participant) => {
            const champion = await getChampionInfos(participant.championId);
            if (champion === null) {
                throw Error;
            }
            const summonerSpells = await getPlayerSummonerSpells(participant.summoner1Id, participant.summoner2Id);
            if (summonerSpells === false) {
                throw Error
            }
            const [mainPerks, subPerks] = await getEndedGamePerks(participant.perks.styles);
            if (!mainPerks || !subPerks) {
                throw Error
            }
            const items = await getItemInfos(participant);
            const playerCommonPart = extractCommontPlayerParts(participant, targetSummonerId);
            const gameResultStatistics = await getEndedGamePlayerStatistics(participant, playerCommonPart.isBlueTeam ? blueTeamChampionKills : redTeamChampionKills);
            return ({
                ...playerCommonPart,
                ...gameResultStatistics,
                champion,
                summonerSpells,
                mainPerks,
                subPerks
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

const extractCurrentGameTeamsInfo = async (bannedChampions: BannedChampionsCurrentGame[]): Promise<CurrentGameTeam[]> => {
    const [blueTeamBans, redTeamBans] = await getCurrentGameBans(bannedChampions);
    const blueTeam: CurrentGameTeam = {
        bans: blueTeamBans
    };
    const redTeam: CurrentGameTeam = {
        bans: redTeamBans
    }
    return [blueTeam, redTeam]
}

const getEndedGameBans = async (bans: BanDto[]): Promise<(Champion | null)[]> => {
    return Promise.all(bans.map(async (banObj) => {
        return getChampionInfos(banObj.championId)
    }))
}

const extractEndedGameTeamObjectKills = async (objectives: ObjectivesDto): Promise<stringNumberDict> => {
    const objectKills: stringNumberDict = {};
    await Promise.all(
        Object.entries(objectives).map(([objectName, { kills }]) => {
            objectKills[`${objectName}Kills`] = kills;
        })
    )
    return objectKills
}

const extractEndedGameTeamInfo = async (teamObj: TeamDto): Promise<EndedGameTeam> => {
    const bans = await getEndedGameBans(teamObj.bans);
    const objectKills = await extractEndedGameTeamObjectKills(teamObj.objectives);
    return ({
        bans,
        win: teamObj.win,
        championKills: objectKills.championKills,
        dragonKills: objectKills.dragonKills,
        baronKills: objectKills.baronKills,
        towerKills: objectKills.towerKills,
        inhibitorKills: objectKills.inhibitorKills,
        riftHeraldKills: objectKills.riftHeraldKills
    })
}

const extractEndedGameTeamsInfo = async (teams: TeamDto[]): Promise<EndedGameTeam[]> => {
    const blueTeam = await extractEndedGameTeamInfo(teams[0]);
    const redTeam = await extractEndedGameTeamInfo(teams[1]);
    return [blueTeam, redTeam];
}

const getGameModeInKorean = (queueTypeId: QueueTypeId): QueueTypeKor => {
    const gameModeEng: QueueTypeEng = constants.codes.queueType[queueTypeId];
    const gameModeKor: QueueTypeKor = constants.korean.queueType[gameModeEng];
    return gameModeKor
}

const fetchCurrentMatch = async (summonerId: string): Promise<CurrentMatchFetch> => {
    try {
        const url = getCurrentMatchUrl(summonerId);
        const response = await axios.get(url);
        if (response.status === 200) {
            const currentMatchData = response.data;
            const gameMode = getGameModeInKorean(currentMatchData.gameQueueConfigId);;
            const gamePlayers: Player[] | false = await extractCurrentGamePlayerInfos(currentMatchData.participants, summonerId);
            if (!gamePlayers) {
                throw Error
            }
            const [blueTeam, redTeam]: CurrentGameTeam[] = await extractCurrentGameTeamsInfo(currentMatchData.bannedChampions)
            const currentMatch: Match = {
                id: currentMatchData.gameId,
                gameMode,
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
            const fetchResult = handleFailedRequest(response.status);
            if (fetchResult.errorCode === constants.codes.error.noResult) {
                return ({
                    result: true,
                    currentMatch: null
                })
            } else {
                return fetchResult
            }
        }
    } catch (error) { //no current games or API KEY expired
        console.log(error);
        return CODE_ERROR_RESULT;
    }
}

const fetchEndedMatchById = async (matchId: string, targetSummonerId: string) => {
    const url: string = getEndedMatchUrl(matchId);
    try {
        const { status, data: { info: matchData } } = await axios.get(url);
        if (status === 200) {
            const gameMode = getGameModeInKorean(matchData.queueId);
            const [blueTeam, redTeam]: EndedGameTeam[] = await extractEndedGameTeamsInfo(matchData.teams)
            const players = await extractEndedGamePlayerInfos(matchData.participants, targetSummonerId, blueTeam.championKills, redTeam.championKills)
            const match: Match = {
                id: matchId,
                gameMode,
                gameStartTime: matchData.gameStartTimestamp,
                gameLength: matchData.gameDuration,
                participants: gamePlayers,
                blueTeam,
                redTeam
            }
        } else {
            return handleFailedRequest(status);
        }
    } catch (error) {
        return CODE_ERROR_RESULT;
    }
}

export const fetchEndedMatches = async (summonerPuuid: string, summonerId: string, page: number = 1): Promise<EndedMatchFetch> => {
    const url: string = getEndedMatchListUrl(summonerPuuid, page);
    const { status, data: matchIds } = await axios.get(url);
    if (status === 200) {
        const endedMatches = await Promise.all(matchIds.map(async (matchId: string) => {
            return fetchEndedMatchById(matchId, summonerId)
        }))
        return {
            result: true,
            Matches: endedMatches
        }
    } else {
        return handleFailedRequest(status);
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
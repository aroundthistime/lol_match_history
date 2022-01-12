import { getChampionImageUrl, getProfileIconUri, getSummonerSpellImageUrl, getTierImageUrl } from "../utils/imageExtractors";

import axios from "axios";
import { Request, Response, NextFunction } from 'express';

const RANKED_SOLO = 'RANKED_SOLO_5x5';
const RANKED_TEAM = 'RANKED_TEAM_5x5';

const CODES = {
    QUEUE_TYPES: {
        400: 'norm', //Normal Draft Pick
        420: 'solo',
        430: 'norm',
        440: 'flex',
        450: 'aram',
        700: 'clash',
        830: 'ai',
        840: 'ai',
        850: 'ai',
        900: 'urf',
        920: 'poro',
        1020: 'ofa',
        1300: 'nbg',
        1400: 'usb', // Ultimate Spellbook
        2000: 'tut',
        2010: 'tut',
        2020: 'tut',
    },
    TEAM_ID: {
        blue: 100,
        red: 200
    }
}

const QUEUE_TYPES_KOREAN = {
    "solo": "솔랭",
    "norm": "일반",
    "aram": "칼바람",
    "flex": "자랭",
    "nbg": "돌넥",
    "usb": "궁주문서",
    "urf": "URF",
    "ofa": "단일",
    "ai": "AI대전",
    "poro": "포로왕",
    "tut": "튜토리얼",
    "etc": "기타",
    "clash": "격전"
}



const fetchUser = async (username: string) => {
    try {
        const url: string = encodeURI(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${process.env.API_KEY}`)
        const response = await axios.get(url);
        let result: boolean; //fetch 결과
        if (response.status === 200) {
            result = true; //성공
            const profileIconUri = getProfileIconUri(response.data.profileIconId);
            return ({
                result,
                profileIconUri,
                ...response.data,
            })
        } else {
            if (response.status === 404) {
                result = null; //해당 소환사 없음
            } else {
                result = false; //그 외의 이유로 fetch 실패
            }
            return ({
                result
            })
        }
    } catch (error) {
        console.log(error);
        return ({
            result: false
        })
    }
}

const extractTier = async (tiers, isSolo) => {
    const targetQueueType = isSolo ? RANKED_SOLO : RANKED_TEAM;
    let result = await tiers.find(tierObj => tierObj.queueType === targetQueueType);
    if (result === undefined) {
        result = {
            tier: "UNRANKED",
            tierImage: getTierImageUrl('UNRANKED')
        }
    } else {
        result = {
            tier: result.tier,
            tierImage: getTierImageUrl(result.tier),
            rank: result.rank,
            leaguePoints: result.leaguePoints,
            wins: result.wins,
            losses: result.losses
        }
    }
    return result;
}

const fetchUserTiers = async (summonerId) => {
    try {
        const response = await axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${process.env.API_KEY}`);
        let solo;
        let team;
        if (response && response.data) {
            solo = await extractTier(response.data, true);
            team = await extractTier(response.data, false);
        } else {
            solo = await extractTier([], true);
            team = await extractTier([], false);
        }
        return ({
            solo,
            team
        })
    } catch (error) {
        console.log(error);
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
    const blueTeam = await players.filter(player => player.teamId === CODES.TEAM_ID.blue);
    const redTeam = await players.filter(player => player.teamId === CODES.TEAM_ID.red);
    console.log(blueTeam);
    return ({
        blue: blueTeam,
        red: redTeam
    })
}


const fetchCurrentMatch = async (summonerId) => {
    try {
        const response = await axios.get(`https://kr.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${summonerId}?api_key=${process.env.API_KEY}`);
        if (response.status !== 200) {
            throw Error;
        }
        const gameModeEng = CODES.QUEUE_TYPES[response.data.gameQueueConfigId];
        const gameModeKor = QUEUE_TYPES_KOREAN[gameModeEng];
        const gamePlayers = await extractGamePlayerInfos(response.data.participants);
        return ({
            gameLength: response.data.gameLength,
            gameMode: gameModeKor,
            players: gamePlayers
        })

    } catch (error) { //no current games or API KEY expired
        return undefined
    }
}

export const fetchByUsername = async (req: Request, res: Response) => {
    const {
        params: { username }
    } = req;
    let user = await fetchUser(username);
    if (user.result) {
        const tiers = await fetchUserTiers(user.id);
        const currentMatch = await fetchCurrentMatch(user.id)
        user = {
            ...user,
            tiers,
            currentMatch
        }
    }
    res.json(user);
}
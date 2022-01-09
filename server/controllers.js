const { default: axios } = require("axios");

const RANKED_SOLO = 'RANKED_SOLO_5x5';
const RANKED_TEAM = 'RANKED_TEAM_5x5';


const fetchUser = async (username) => {
    try {
        const url = encodeURI(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${process.env.API_KEY}`)
        const response = await axios.get(url);
        let result; //fetch 결과
        if (response.status === 200) {
            result = true; //성공
            const profileIconUri = `http://127.0.0.1:${process.env.PORT}/static/img/profileicon/${response.data.profileIconId}.png`
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

const getTierImageUrl = (tier) => {
    return `http://127.0.0.1:${process.env.PORT}/static/img/tiers/${tier}.png`
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

export const fetchByUsername = async (req, res) => {
    const {
        params: { username }
    } = req;
    let user = await fetchUser(username);
    if (user.result) {
        const tiers = await fetchUserTiers(user.id);
        console.log("TIERS : ", tiers);
        // const matches = await fetchLastMatches()
        user = {
            ...user,
            tiers
        }
    }
    res.json(user);
}
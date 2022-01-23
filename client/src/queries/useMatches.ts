import axios from "axios";
import { useQuery } from "react-query";
import { EndedMatch } from "../types/Match/Match";

const getMatchesByPage = async (summonerPuuid: string, summonerId: string, page: number): Promise<EndedMatch[]> => {
    console.log("!!!!");
    const { data } = await axios.get(`/matches?summonerPuuis=${summonerPuuid}&&summonerId=${summonerId}&&page=${page}`);
    return data
}

export const useMatches = (summonerPuuid: string, summonerId: string, page: number) => {
    return useQuery(
        ['user', summonerPuuid, summonerId, page],
        () => getMatchesByPage(summonerPuuid, summonerId, page),
        {
            refetchOnWindowFocus: false,
            enabled: false
        }
    )
}
import axios from "axios";
import { useQuery } from "react-query";
import { EndedMatch } from "../types/Match/Match";

const getMatchesByPage = async (summonerPuuid: string, summonerId: string, page: number): Promise<EndedMatch[]> => {
    const { data } = await axios.get(`/matches?summonerPuuid=${summonerPuuid}&&summonerId=${summonerId}&&page=${page}`);
    return data
}

export const useMatches = (summonerPuuid: string, summonerId: string, page: number, enabled: boolean) => {
    return useQuery(
        ['user', summonerPuuid, summonerId, page],
        () => getMatchesByPage(summonerPuuid, summonerId, page),
        {
            refetchOnWindowFocus: false,
            enabled,
            retry: false
        }
    )
}
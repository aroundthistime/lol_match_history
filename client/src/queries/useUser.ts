import axios from "axios";
import { useQuery } from "react-query";
import { SearchTargetUser } from "../types/User/User";

const getUserByUsername = async (username: string): Promise<SearchTargetUser | null> => {
    const { data } = await axios.get(`/summoner/${username}`);
    return data
}

export const useUser = (username: string) => {
    return useQuery(
        ['user', username],
        () => getUserByUsername(username),
        {
            refetchOnWindowFocus: false,
        }
    )
}
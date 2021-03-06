import { Match } from "./Match";
import { Tiers } from "./Tiers";

interface UserDefault {
    name: string;
    id: string;
}

export interface User extends UserDefault {
    profileIcon?: string;
    accountId?: string;
    puuid?: string;
    summonerLevel?: number;
    tiers?: Tiers;
    currentMatch?: Match | null;
    latestMatches?: Match[];
}

export interface SearchTargetUser extends UserDefault {
    profileIcon: string;
    accountId: string;
    puuid: string;
    summonerLevel: number;
    tiers?: Tiers;
    currentMatch?: Match | null;
    latestMatches?: Match[];
}
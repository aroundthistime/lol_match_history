import { Match } from "./Match";
import { Tier } from "./Tier";
import { Tiers } from "./Tiers";

export interface User {
    name: string;
    id: string;
    profileIcon?: string;
    accountId?: string;
    puuid?: string;
    summonerLevel?: number;
    tiers?: Tiers;
    currentMatch?: Match;
    latestMatches?: Match[];
}
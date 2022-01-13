import { Match } from "./Match";
import { Tier } from "./Tier";
import { Tiers } from "./Tiers";

export interface User {
    name: string;
    profileIcon: string;
    accountId: string;
    id: string;
    puuid: string;
    summonerLevel: number;
    tiers?: Tiers;
    currentMatch?: Match;
    latestMatches?: Match[];
}
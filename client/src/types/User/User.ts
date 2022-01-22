import { CurrentMatch, EndedMatch } from "../Match/Match";
import { Tiers } from "../Tier/Tier";

export interface User {
    name: string;
    id: string;
}

export interface SearchTargetUser extends User {
    profileIcon: string;
    accountId: string;
    puuid: string;
    summonerLevel: number;
    tiers: Tiers;
    currentMatch?: CurrentMatch | null;
    latestMatches?: EndedMatch[];
}
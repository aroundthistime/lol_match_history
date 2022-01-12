import { Tier } from "./Tier";

export interface User {
    name: string;
    profileIcon: string;
    accountId: string;
    id: string;
    summonerLevel: number;
    tier: Tier;
}
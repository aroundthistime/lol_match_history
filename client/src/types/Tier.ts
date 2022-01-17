export interface Tiers {
    solo: Tier;
    team: Tier;
}

export interface Tier {
    tier: string;
    tierImage?: string;
    rank?: string;
    leaguePoints?: number;
    wins?: number;
    losses?: number;
}
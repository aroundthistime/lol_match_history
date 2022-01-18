export interface Tiers {
    solo: Tier;
    team: Tier;
    // solo: UnrankedTier | RankedTier;
    // team: UnrankedTier | RankedTier;
}

// export interface UnrankedTier {
//     tier: string;
//     tierImage: string;
// }

export interface Tier {
    tier: string;
    tierImage: string;
    rank?: string | undefined;
    leaguePoints?: number | undefined;
    wins?: number | undefined;
    losses: number | undefined;
}

// export interface RankedTier extends UnrankedTier {
//     rank: string;
//     leaguePoints: number;
//     wins: number;
//     losses: number;
// }

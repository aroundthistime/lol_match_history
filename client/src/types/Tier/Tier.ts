// import { TierTypeEng } from "./TierType";

import KOREAN_TIERS from "../../constants/korean/korean_tiers";
import { TierTypeEng } from "./TierType";

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
    rank?: string;
    leaguePoints?: number;
    wins?: number;
    losses?: number;
}

// export interface RankedTier extends UnrankedTier {
//     rank: string;
//     leaguePoints: number;
//     wins: number;
//     losses: number;
// }

import { MiniSeries } from "./MiniSeries";

export interface Tier {
    tier: string;
    tierImage?: string;
    rank?: string;
    leaguePoints?: number;
    wins?: number;
    losses?: number;
    miniSeries?: MiniSeries | undefined;
}
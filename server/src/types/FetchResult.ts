import { ErrorCode } from "./errorCode";
import { Match } from "./Match";
import { Tiers } from "./Tiers";
import { User } from "./User";

export interface FetchResult {
    result: boolean;
    errorCode?: ErrorCode;
}

export interface UserFetch extends FetchResult {
    user?: User;
}

export interface TiersFetch extends FetchResult {
    tiers?: Tiers;
}

export interface CurrentMatchFetch extends FetchResult {
    currentMatch?: Match | undefined;
}
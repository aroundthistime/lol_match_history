import { ErrorCode } from "./errorCode";
import { Match } from "./Match";
import { Tiers } from "./Tiers";
import { SearchTargetUser } from "./User";

export interface FetchResult {
    result: boolean;
    errorCode?: ErrorCode;
}

export interface UserFetchResult extends FetchResult {
    user?: SearchTargetUser;
}

export interface TiersFetchResult extends FetchResult {
    tiers?: Tiers;
}

export interface EndedMatchFetchResult extends FetchResult {
    Matches?: Match[];
}
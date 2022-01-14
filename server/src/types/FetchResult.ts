import { ErrorCode } from "./errorCode";
import { Match } from "./Match";
import { Tiers } from "./Tiers";
import { SearchTargetUser, User } from "./User";

export interface FetchResult {
    result: boolean;
    errorCode?: ErrorCode;
}

export interface UserFetch extends FetchResult {
    user?: SearchTargetUser;
}

export interface TiersFetch extends FetchResult {
    tiers?: Tiers;
}


export interface EndedMatchFetch extends FetchResult {
    Matches?: Match[];
}
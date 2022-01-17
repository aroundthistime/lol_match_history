import { ErrorCode } from "./errorCode";
import { SearchTargetUser } from "./User";

export interface FetchResult {
    result: boolean;
}

export interface FailedFetchResult extends FetchResult {
    errorCode: ErrorCode;
}

export interface UserFetchResult extends FetchResult {
    user: SearchTargetUser;
}

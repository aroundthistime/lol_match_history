import constants from "../constants/constants";
import { FetchResult } from "../types/FetchResult";
import { ErrorCode } from "../types/errorCode";
import { QueueTypeEng, QueueTypeId, QueueTypeKor } from "../types/QueueType";


export const VERSION = "12.1.1";


export const CODE_ERROR_RESULT = {
    result: false,
    errorCode: constants.codes.error.codeError
}

export const handleFailedRequest = (statusCode: number): FetchResult => {
    let errorCode: ErrorCode;
    if (statusCode === 404) {
        errorCode = constants.codes.error.noResult; //해당 이름의 유저 없음
    } else if (statusCode === 403) {
        errorCode = constants.codes.error.apiExpired; //api키 만료
    } else {
        errorCode = constants.codes.error.unauthorized; //허가되지 않은 접근
    }
    return ({
        result: false,
        errorCode
    })
}

export const getGameModeInKorean = (queueTypeId: QueueTypeId): QueueTypeKor => {
    const gameModeEng: QueueTypeEng = constants.codes.queueType[queueTypeId];
    const gameModeKor: QueueTypeKor = constants.korean.queueType[gameModeEng];
    return gameModeKor
}






const SECOND_TO_MILLISECONDS = 1000;
const MINUTE_TO_MILLISECONDS = SECOND_TO_MILLISECONDS * 60;
const HOUR_TO_MILLISECONDS = MINUTE_TO_MILLISECONDS * 60;
const DAY_TO_MILLISECONDS = HOUR_TO_MILLISECONDS * 24;

const getDaysPartFromMilliseconds = (milliseconds: number): number => {
    return Math.floor(milliseconds / DAY_TO_MILLISECONDS)
}

const getHoursPartFromMilliseconds = (milliseconds: number): number => {
    return Math.floor(milliseconds / HOUR_TO_MILLISECONDS)
}

const getMinutesPartFromMilliseconds = (milliseconds: number): number => {
    return Math.floor((milliseconds % HOUR_TO_MILLISECONDS) / MINUTE_TO_MILLISECONDS);
}

const getSecondsPartFromMilliseconds = (milliseconds: number): number => {
    return Math.floor((milliseconds % MINUTE_TO_MILLISECONDS) / SECOND_TO_MILLISECONDS);
}

export const getHourMinuteSecondStringFromMilliseconds = (milliseconds: number): string => {
    const hours = getHoursPartFromMilliseconds(milliseconds);
    const minutes = getMinutesPartFromMilliseconds(milliseconds)
    const seconds = getSecondsPartFromMilliseconds(milliseconds)
    if (hours > 0) {
        return `${hours}시간 ${minutes}분 ${seconds}초`
    } else {
        return `${minutes}분 ${seconds}초`
    }
}

export const getHourMinuteSecondStringFromSeconds = (minutes: number): string => {
    return getHourMinuteSecondStringFromMilliseconds(minutes * SECOND_TO_MILLISECONDS)
}

export const getAbsTimeDiffFromCurrent = (targetTime: number): number => {
    const currentTime = new Date().getTime();
    return Math.abs(currentTime - targetTime);
}

export const getLargestUnitFromTime = (milliseconds: number): string => {
    if (milliseconds >= DAY_TO_MILLISECONDS) {
        const days = getDaysPartFromMilliseconds(milliseconds);
        return `${days}일`
    } else if (milliseconds >= HOUR_TO_MILLISECONDS) {
        const hours = getHoursPartFromMilliseconds(milliseconds);
        return `${hours}시간`
    } else if (milliseconds >= MINUTE_TO_MILLISECONDS) {
        const minutes = getMinutesPartFromMilliseconds(milliseconds);
        return `${minutes}분`
    } else {
        const seconds = getSecondsPartFromMilliseconds(milliseconds);
        return `${seconds}초`
    }
}

export const getLargestUnitOfTimeDiffFromCurrent = (time: number): string => {
    const timeDiff = getAbsTimeDiffFromCurrent(time);
    return getLargestUnitFromTime(timeDiff);
}
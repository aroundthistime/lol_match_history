import i18n from "i18next";

const SECOND_TO_MILLISECONDS = 1000;
const MINUTE_TO_MILLISECONDS = SECOND_TO_MILLISECONDS * 60;
const HOUR_TO_MILLISECONDS = MINUTE_TO_MILLISECONDS * 60;
const DAY_TO_MILLISECONDS = HOUR_TO_MILLISECONDS * 24;

const TIME_TEXT = i18n.t("common.time.time");
const DAY_TEXT = i18n.t("common.time.day");
const HOUR_TEXT = i18n.t("common.time.hour");
const MINUTE_TEXT = i18n.t("common.time.minute");
const SECOND_TEXT = i18n.t("common.time.second");


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
    console.log(HOUR_TEXT, DAY_TEXT, MINUTE_TEXT, SECOND_TEXT);
    if (hours > 0) {
        return `${hours}${HOUR_TEXT} ${minutes}${MINUTE_TEXT} ${seconds}${SECOND_TEXT}`
    } else {
        return `${minutes}${MINUTE_TEXT} ${seconds}${SECOND_TEXT}`
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
        return `${days}${DAY_TEXT}`
    } else if (milliseconds >= HOUR_TO_MILLISECONDS) {
        const hours = getHoursPartFromMilliseconds(milliseconds);
        return `${hours}${HOUR_TEXT}`
    } else if (milliseconds >= MINUTE_TO_MILLISECONDS) {
        const minutes = getMinutesPartFromMilliseconds(milliseconds);
        return `${minutes}${MINUTE_TEXT}`
    } else {
        const seconds = getSecondsPartFromMilliseconds(milliseconds);
        return `${seconds}${SECOND_TEXT}`
    }
}

export const getLargestUnitOfTimeDiffFromCurrent = (time: number): string => {
    const timeDiff = getAbsTimeDiffFromCurrent(time);
    return getLargestUnitFromTime(timeDiff);
}
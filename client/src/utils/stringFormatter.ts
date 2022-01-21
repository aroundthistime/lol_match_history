const SECOND_TO_MILLISECONDS = 1000;
const MINUTE_TO_MILLISECONDS = SECOND_TO_MILLISECONDS * 60;
const HOUR_TO_MILLISECONDS = MINUTE_TO_MILLISECONDS * 60;


export const getHourMinuteSecondString = (milliseconds: number): string => {
    const hours = Math.floor(milliseconds / HOUR_TO_MILLISECONDS)
    const minutes = Math.floor((milliseconds % HOUR_TO_MILLISECONDS) / MINUTE_TO_MILLISECONDS);
    const seconds = ((milliseconds % MINUTE_TO_MILLISECONDS) / SECOND_TO_MILLISECONDS).toFixed(0);
    if (hours > 0) {
        return `${hours}시간 ${minutes}분 ${seconds}초`
    } else {
        return `${minutes}분 ${seconds}초`
    }
}
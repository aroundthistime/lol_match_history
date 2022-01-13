import Constants from "../constants/constants";

export type QueueTypeId = keyof typeof Constants.codes.queueType;

export type QueueTypeEng = keyof typeof Constants.korean.queueType;

export type QueueTypeKor = typeof Constants.korean.queueType[QueueTypeEng];
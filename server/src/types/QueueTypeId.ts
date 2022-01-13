import Constants from "../constants/constants";

type QueueTypeKeys = keyof typeof Constants.codes.queueTypes;

export type QueueTypeId = typeof Constants.codes.queueTypes[QueueTypeKeys];
import Constants from "../constants/constants"

type ErrorCodeKeys = keyof typeof Constants.codes.error;

export type ErrorCode = typeof Constants.codes.error[ErrorCodeKeys];
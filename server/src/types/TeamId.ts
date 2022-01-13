import Constants from "../constants/constants";

type TeamIdKeys = keyof typeof Constants.codes.teamId;

export type TeamId = typeof Constants.codes.teamId[TeamIdKeys]
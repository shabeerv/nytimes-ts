import { RootState } from "../store";

export const getLatestError = (state: RootState) => state.error.latestError;

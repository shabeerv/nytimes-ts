import { createSlice } from "@reduxjs/toolkit";
import { NOT_STARTED, LOADING, SUCCESS, ERROR } from "../helpers/status";

interface IStatusState {
  [key: string]: string;
}

export type StatusTypes = "NOT_STARTED" | "LOADING" | "SUCCESS" | "ERROR";

const initialState: IStatusState = {};

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => {
        return (
          action.type.endsWith("/fulfilled") ||
          action.type.endsWith("/pending") ||
          action.type.endsWith("/rejected")
        );
      },
      (state, { _, type }) => {
        const matchesRejected = /(.*)\/(rejected)/.exec(type) || [];
        const matchesFulfilled = /(.*)\/(fulfilled)/.exec(type) || [];
        const matchesLoading = /(.*)\/(pending)/.exec(type) || [];

        switch (true) {
          case matchesFulfilled?.length > 0:
            const [, requestNameSucc] = matchesFulfilled;
            state[requestNameSucc] = SUCCESS;
            break;
          case matchesRejected?.length > 0:
            const [, requestNameRej] = matchesRejected;
            state[requestNameRej] = ERROR;
            break;
          case matchesLoading?.length > 0:
            const [, requestNameLoad] = matchesLoading;
            state[requestNameLoad] = LOADING;
            break;
          default:
            state[type] = NOT_STARTED;
            break;
        }
      }
    );
  },
});

export default statusSlice.reducer;

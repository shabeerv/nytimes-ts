import { createSlice } from "@reduxjs/toolkit";

interface IErrorState {
  latestError: string;
  [key: string]: string;
}

const initialState: IErrorState = {
  latestError: "",
};

const errorsSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    reset: (state) => {
      state.latestError = "";
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => {
        return action.type.endsWith("/rejected");
      },
      (state, { payload, type }) => {
        state.latestError = payload?.data;
        state[type.replaceAll("/rejected", "")] = payload?.data;
        return state;
      }
    );
  },
});

export const { reset } = errorsSlice.actions;

export default errorsSlice.reducer;

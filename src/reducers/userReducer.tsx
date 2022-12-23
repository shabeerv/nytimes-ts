import { createReducer, createSlice } from "@reduxjs/toolkit";
import { login, register } from "../actions/userAction";

const initialState = {
  accessToken: null,
  isAuth: false,
};

// const userReducer = createReducer(initialState, (builder) => {
//     builder
//         .addCase()
// }

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      const token = payload.access_token;
      state.accessToken = token;
      state.isAuth = true;
    });
    builder.addCase(register.fulfilled, (state, { payload }) => {
      const token = payload.access_token;
      state.accessToken = token;
      state.isAuth = true;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;

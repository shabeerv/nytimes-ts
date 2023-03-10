import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import UserController from "../controllers/UserController";

export const actionTypes = {
  LOGIN: "user/LOGIN",
  LOGOUT: "user/LOGOUT",
  REGISTER: "user/REGISTER",
};

type EmailProps = {
  email: string;
  password: string;
};

export const login = createAsyncThunk(
  actionTypes.LOGIN,
  async ({ email, password }: EmailProps, { rejectWithValue }) => {
    try {
      const response = await UserController.login(email, password);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const register = createAsyncThunk(
  actionTypes.REGISTER,
  async ({ email, password }: EmailProps, { rejectWithValue }) => {
    try {
      const response = await UserController.register(email, password);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAction(actionTypes.LOGOUT);

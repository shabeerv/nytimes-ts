import { AnyAction, combineReducers } from "@reduxjs/toolkit";
import commentsReducer from "./commentsReducer";
import errorReducer from "./errorReducer";
import newsReducer from "./newsReducer";
import statusReducer from "./statusReducer";
import userReducer from "./userReducer";
import { actionTypes as userActions } from "../actions/userAction";

const combinedReducer = combineReducers({
  user: userReducer,
  status: statusReducer,
  error: errorReducer,
  news: newsReducer,
  comments: commentsReducer,
});

export const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === userActions.LOGOUT) {
    state = undefined;
  }
  return combinedReducer(state, action);
};

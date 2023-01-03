import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import statusReducer from "../reducers/statusReducer";
import errorReducer from "../reducers/errorReducer";
import newsReducer from "../reducers/newsReducer";
import { actionTypes as userActions } from "../actions/userAction";
import commentsReducer from "../reducers/commentsReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["status", "error"],
};

const combinedReducer = combineReducers({
  user: userReducer,
  status: statusReducer,
  error: errorReducer,
  news: newsReducer,
  comments: commentsReducer,
});

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === userActions.LOGOUT) {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

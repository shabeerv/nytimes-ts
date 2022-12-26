import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import statusReducer from "../reducers/statusReducer";
import errorReducer from "../reducers/errorReducer";
import newsReducer from "../reducers/newsReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["image", "status", "error"],
};

const combinedReducer = combineReducers({
  user: userReducer,
  status: statusReducer,
  error: errorReducer,
  news: newsReducer,
});

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === "user/logout") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

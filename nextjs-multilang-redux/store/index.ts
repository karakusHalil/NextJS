// store/index.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";

const rootReducer = combineReducers({
  language: languageReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: rootReducer,
});

export default store;

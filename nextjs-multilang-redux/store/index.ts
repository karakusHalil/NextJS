import { configureStore, combineReducers } from "@reduxjs/toolkit";
import languageReducer from "./languageReducer";

const rootReducer = combineReducers({
  language: languageReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
const store = configureStore({ 
    reducer: rootReducer 
});

export default store;

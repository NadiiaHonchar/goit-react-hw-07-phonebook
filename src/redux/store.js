import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./reducers";

const rootReducer = combineReducers({ contacts: contactsReducer });

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }),
  devTools: process.env.NODE_ENV === "development",
});

export default store;

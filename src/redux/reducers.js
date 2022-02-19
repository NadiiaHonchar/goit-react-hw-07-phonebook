import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { changeFilter } from "./actions";
import { addContact, delContact, getContact } from "./contacts_operation";

export const itemReducer = createReducer([], {
  [addContact.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [getContact.fulfilled]: (_, { payload }) => payload,
  [delContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

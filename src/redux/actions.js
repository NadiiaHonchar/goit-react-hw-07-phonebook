import { createAction } from "@reduxjs/toolkit";

export const addContactRecuest = createAction("contact/addContact");
export const delContactRecuest = createAction("contact/delContact");
export const getContactRecuest = createAction("contact/getContact");
export const changeFilter = createAction("contact/changeFilter");

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  addContactRecuest,
  delContactRecuest,
  getContactRecuest,
} from "./actions";

export const getContact = createAsyncThunk(getContactRecuest, async () => {
  const contacts = await axios
    .get("https://620eae9cec8b2ee28329a2ce.mockapi.io/contacts")
    .then((res) => res.data);
  return contacts;
});

export const addContact = createAsyncThunk(
  addContactRecuest,
  async (contact) => {
    const { name } = contact;
    const contacts = await axios
      .get("https://620eae9cec8b2ee28329a2ce.mockapi.io/contacts")
      .then((res) => res.data);
    if (contacts.filter((item) => item.name === name).length > 0) {
      alert(`${name} is already in contacts`);
      throw Error("Existing contact");
    }
    const addContacts = await axios
      .post("https://620eae9cec8b2ee28329a2ce.mockapi.io/contacts", contact)
      .then((res) => res.data);
    return addContacts;
  }
);

export const delContact = createAsyncThunk(delContactRecuest, async (id) => {
  const contacts = await axios
    .delete(`https://620eae9cec8b2ee28329a2ce.mockapi.io/contacts/${id}`)
    .then((res) => res.data.id);
  return contacts;
});

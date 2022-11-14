import { createSelector } from "@reduxjs/toolkit";

export const getItems = state => state.stateContacts.contacts.items;
export const getIsLoading = state => state.stateContacts.contacts.isLoading;
export const getError = state => state.stateContacts.contacts.error;
export const getFilter = state => state.stateContacts.filter;

export const getFilterContacts = createSelector(
    [getItems, getFilter], (contacts, filter) => {
    return contacts.filter(contact => {
    // console.log(contact.name);
   return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
    }
)
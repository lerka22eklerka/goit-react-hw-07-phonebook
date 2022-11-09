import { createSelector } from "@reduxjs/toolkit";

export const getItems = state => state.stateContacts.contacts.items;
export const getIsLoading = state => state.stateContacts.contacts.isLoading;
export const getError = state => state.stateContacts.contacts.error;
export const getFilter = state => state.stateContacts.filter;


export const getIsContactExist = state =>
  Boolean(state.stateRedux.contacts.items.length);

export const selectVisibleContacts = createSelector(
  [getItems, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
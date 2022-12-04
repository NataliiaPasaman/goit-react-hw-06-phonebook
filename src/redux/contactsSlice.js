import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { contacts: [] },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.unshift(action.payload);
            },
            prepare(name, number) {
                return { payload: {
                    name,
                    number,
                    id: nanoid(),
                }}
            },
        },
        deleteContact (state, action) {
            const index = state.contacts.findIndex(contact => contact.id === action.payload);
            state.contacts.splice(index, 1);
        }
    },
});

const persistConfig = {
    key: 'contacts',
    storage,
  }
export const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact } = contactsSlice.actions;

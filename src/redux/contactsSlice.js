import { createSlice } from '@reduxjs/toolkit';
import initialState from './constants';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialState.contacts,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.unshift(action.payload);
            },
            prepare(text) {
                return { payload: {
                    text,
                    id: nanoid(),
                }}
            },
        },
        deleteContact (state, action) {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        }
    },
});

const { addContact, deleteContact } = contactsSlice.actions;
console.log('addContact', addContact);

export const contactsReducer = contactsSlice.reducer;
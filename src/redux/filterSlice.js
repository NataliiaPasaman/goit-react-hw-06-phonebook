import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
});

export const { filterContact, setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;


// const getFilterContacts = () => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };
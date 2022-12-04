import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: ''},
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
});

export const { filterContact, setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
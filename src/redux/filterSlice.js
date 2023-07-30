import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    getFilters(state, action) {
      return (state = action.payload);
    },
  },
});

export const { getFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

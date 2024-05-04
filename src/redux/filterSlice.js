import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setValue: {
      reducer(_, { payload }) {
        return payload;
      },
    },
  },
});

export const { setValue } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

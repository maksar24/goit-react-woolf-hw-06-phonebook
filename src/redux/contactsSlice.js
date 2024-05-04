import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = { contactsList: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactAction: {
      reducer(state, { payload }) {
        state.contactsList.push(payload);
      },
      prepare(data) {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteContactAction: {
      reducer(state, { payload }) {
        state.contactsList = state.contactsList.filter(el => el.id !== payload);
      },
    },
  },
});

export const { addContactAction, deleteContactAction } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

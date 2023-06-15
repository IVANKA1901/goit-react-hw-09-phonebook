import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './operations';

const initialState = {
  contacts: [],
  filter: '',
  isLoading: false,
  error: '',
};

export const contactSlice = createSlice({
  name: 'Contact',
  initialState,
  reducers: {
    filterContactThunk: (state, { payload }) => ({
      ...state,
      filter: payload,
    }),
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = payload;
      })
      .addCase(fetchContactsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = [...state.contacts, payload];
      })
      .addCase(addContactThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.filter(el => el.id !== payload.id);
      })
      .addCase(deleteContactThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContactAction, deleteContactAction, filterContactThunk } =
  contactSlice.actions;

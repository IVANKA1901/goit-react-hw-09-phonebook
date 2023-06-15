import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactApi,
  deleteContactApi,
  getContactsApi,
} from '../../contactsApi';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getContactsApi();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (user, thunkAPI) => {
    try {
      const data = await addContactApi(user);

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      return await deleteContactApi(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

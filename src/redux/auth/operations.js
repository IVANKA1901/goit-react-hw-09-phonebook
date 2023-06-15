import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerThunk = createAsyncThunk(
  'user/register',
  async (userdata, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', {
        name: userdata.userName,
        email: userdata.userEmail,
        password: userdata.password,
      });
      console.log(data);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'user/login',
  async (userdata, thunkAPI) => {
    // console.log(userdata);

    try {
      const { data } = await axios.post('/users/login', {
        email: userdata.email,
        password: userdata.password,
      });
      setAuthHeader(data.token);

      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'user/logout',
  async (credentials, thunkAPI) => {
    try {
      await axios.post('/users/logout', credentials);
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'user/refresh',
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    token && setAuthHeader(token);

    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

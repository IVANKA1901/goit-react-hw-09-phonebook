import { createSlice } from '@reduxjs/toolkit';
import {
  logInThunk,
  logOutThunk,
  registerThunk,
  refreshUserThunk,
} from './operations';

const initialState = {
  error: null,
  isLoading: false,
  token: null,
  email: null,
  name: null,
  isLoggedIn: false,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleReject = (state, { payload }) => {
  // console.log(payload);
  state.error = payload;
  state.isLoading = false;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.pending, handlePending)
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.token = payload.token;
        state.isLoggedIn = true;
        state.email = payload.user.email;
        state.name = payload.user.name;
        state.isLoading = false;
      })
      .addCase(registerThunk.rejected, handleReject)
      .addCase(logInThunk.pending, handlePending)
      .addCase(logInThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.isLoggedIn = true;
        state.email = payload.user.email;
        state.name = payload.user.name;
        state.isLoading = false;
      })
      .addCase(logInThunk.rejected, handleReject)
      .addCase(logOutThunk.pending, handlePending)
      .addCase(logOutThunk.fulfilled, state => {
        state.isLoading = false;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = null;
        state.email = null;
        state.name = null;
      })
      .addCase(logOutThunk.rejected, handleReject)
      .addCase(refreshUserThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.email = payload.email;
        state.name = payload.name;
        state.isLoggedIn = true;
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.rejected, handleReject);
  },
});

export const authReducer = authSlice.reducer;

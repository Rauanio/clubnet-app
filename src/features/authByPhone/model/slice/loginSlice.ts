import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { sendOtp, verifyOtp } from '../services/loginAsync';
import { LoginSchema } from '../types/LoginSchema';

const initialState: LoginSchema = {
  phone: '',
  otp: '',
  error: '',
  user: null,
  isLoading: false,
  isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setPhone(state, action: PayloadAction<string>) {
      state.phone = action.payload;
    },
    setOtp(state, action: PayloadAction<string>) {
      state.otp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendOtp.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(sendOtp.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(sendOtp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
    builder.addCase(verifyOtp.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(verifyOtp.fulfilled, (state) => {
      state.isLoading = false;
      state.isLoggedIn = true;
    });
    builder.addCase(verifyOtp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;

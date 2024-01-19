import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';
import { ErrorHandler } from 'shared/helpers/ErrorHandler';
import { auth } from 'shared/api/firebase';

export const setupRecaptcha = (phone: string) => {
  const recaptchaVerifier = new RecaptchaVerifier(
    auth,
    'recaptcha-container',
    {}
  );
  return signInWithPhoneNumber(auth, phone, recaptchaVerifier);
};

let confirmObj: ConfirmationResult;

export const sendOtp = createAsyncThunk(
  'auth/sendOtp',
  async (phone: string, { rejectWithValue }) => {
    try {
      confirmObj = await setupRecaptcha(phone);
      return confirmObj;
    } catch (error) {
      return rejectWithValue(ErrorHandler(error));
    }
  }
);

export const verifyOtp = createAsyncThunk(
  'auth/verifyOtp',
  (otp: string, { rejectWithValue }) => {
    try {
      const res = confirmObj.confirm(otp);
      return res;
    } catch (error) {
      return rejectWithValue(ErrorHandler(error));
    }
  }
);

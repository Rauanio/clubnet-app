import { createSlice } from '@reduxjs/toolkit';
// import { LoginSchema } from '../types/loginSchema';

const initialState = {
  phone: null,
  token: null,
  id: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUser(state, action) {
      state.phone = action.payload;
      state.token = action.payload;
      state.id = action.payload;
    },
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;

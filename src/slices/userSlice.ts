import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api';
import axios, { AxiosResponse } from 'axios';
import { UserInfoRes, UserAuthState } from 'interfaces';

const initialState: UserAuthState = {
  username: null,
  isSuccess: false,
  isError: false,
  isLoggedIn: false,
  token: null,
};

export const signupUser = createAsyncThunk(
  'user/signupUser',
  async (userData: UserInfoRes) => {
    const { username, password } = userData;
    const response: AxiosResponse = await axios.post(`${api}/user/signup`, {
      username,
      password,
    } ,{
      withCredentials: true,
    });
    const userInfoRes = response;
    if (userInfoRes.status === 201) {
      return userInfoRes.data;
    }
    return userInfoRes.data.message;
  });

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userData: UserInfoRes) => {
    const { username, password } = userData;
    const response: AxiosResponse = await axios.post(`${api}/user/login`, {
      username,
      password,
    },{
      withCredentials: true,
    });
    const userInfoRes = response;
    if (userInfoRes.status === 200) {
      return userInfoRes.data;
    }
    return userInfoRes.data.message;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearState: (state) => {
      state.isSuccess = false;
      state.isError = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state) => {
      state.isSuccess = false;
    });
    builder.addCase(signupUser.fulfilled, (state) => {
      state.isSuccess = true;
    });
    builder.addCase(signupUser.rejected, (state) => {
      state.isError = true;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.isSuccess = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isLoggedIn = true;
      state.username = action.payload.user.username;
      state.token = action.payload.token;
      return state;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isError = true;
    });
  },
});

export const { clearState } = userSlice.actions;

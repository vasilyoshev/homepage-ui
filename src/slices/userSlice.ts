import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api';
import axios, { AxiosResponse } from 'axios';
import { UserInfoRes, UserAuthState } from 'interfaces';

const initialState: UserAuthState = {
  username: undefined,
  isSuccess: false,
  isError: false,
  isLoggedIn: false,
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
      localStorage.setItem('token', userInfoRes.data.token);
      localStorage.setItem('user', userInfoRes.data.user.username);
      return userInfoRes.data;
    }
    return userInfoRes.data.message;
  },
);

export const validateUserByToken = createAsyncThunk('user/validateUserByToken',
  async (userData: UserInfoRes) => {
    const { token } = userData;
    const response: AxiosResponse = await axios.get(`${api}/user/validate`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
    const userInfoRes = response;
    if (response.status === 200)  {
      return { ...userInfoRes };
    }
    return userInfoRes.data.message;
  });

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
      return state;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isError = true;
    });
    builder.addCase(validateUserByToken.pending, (state) => {
      state.isLoggedIn = false;
    });
    builder.addCase(validateUserByToken.fulfilled, (state) => {
      state.isLoggedIn = true;
    });
    builder.addCase(validateUserByToken.rejected, (state) => {
      state.isError = true;
    });
  },
});

export const { clearState } = userSlice.actions;

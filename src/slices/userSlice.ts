import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { User, UserInfoRes, UserAuthState } from 'interfaces';

const initialState: UserAuthState = {
  username: undefined,
  isSuccess: false,
  isLoggedIn: false,
  isError: false,
  errorMessage: null,
};

export const signupUser = createAsyncThunk<User,UserInfoRes>(
  'user/signupUser',
  async (userData) => {
    const { username, password } = userData;
    const response: AxiosResponse = await axios.post('http://localhost:4000/users/signup',{
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

export const loginUser = createAsyncThunk<User,UserInfoRes>(
  'user/loginUser',
  async (userData) => {
    const { username, password } = userData;
    const response: AxiosResponse = await axios.post('http://localhost:4000/users/login', {
      username,
      password,
    },{
      withCredentials: true,
    });
    const userInfoRes = response;
    if (userInfoRes.status === 200) {
      localStorage.setItem('token', userInfoRes.data.token);
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
      state.isLoggedIn = false;
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
      state.username = action.payload.username;
      return state;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isError = true;
    });
  },
});

export const { clearState } = userSlice.actions;

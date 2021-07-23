import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { User, UserInfoRes, UserAuthState } from 'interfaces';

const initialState: UserAuthState = {
  username: '',
  isSuccess: false,
  isAuth: false,
  isError: false,
  message: '',
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
    if(userInfoRes.status == 201) {
      return userInfoRes.data;
    }
  });

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
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
  },
});

export const { clearState } = userSlice.actions;

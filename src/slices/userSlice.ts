import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { User, UserSignUp, UserAuthState, ThunkApi } from 'interfaces';

const initialState: UserAuthState = {
  user: '',
  isSuccess: false,
  isAuth: false,
};

export const signupUser = createAsyncThunk<User,UserSignUp,ThunkApi>(
  'user/signupUser',
  async (userData, thunkAPI) => {
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
    return thunkAPI.rejectWithValue({ message: userInfoRes.statusText });
  });

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state) => {
      state.isSuccess = false;
    });
    builder.addCase(signupUser.fulfilled, (state,  action: PayloadAction<UserSignUp>) => {
      state.user = action.payload.username;
      state.isSuccess = true;
    });
  },
});

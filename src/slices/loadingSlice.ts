import { createSlice } from '@reduxjs/toolkit';
import { LoadingSliceState } from 'interfaces';
import { RootState } from 'store';

const initialState: LoadingSliceState = {
  loadingCount: 0,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    incrementLoadingCount: (state) => {
      state.loadingCount++;
    },
    decrementLoadingCount: (state) => {
      state.loadingCount--;
    },
  },
});

export const selectIsLoading = ({ loading }: RootState): boolean => !!loading.loadingCount;

export const { incrementLoadingCount, decrementLoadingCount } = loadingSlice.actions;

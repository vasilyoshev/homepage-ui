import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { loadingSlice } from 'slices';

const store = configureStore({
  reducer: {
    loading: loadingSlice.reducer,
  },
  middleware: [...getDefaultMiddleware()],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

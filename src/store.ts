import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { loadingSlice, widgetsSlice, todosSlice, userSlice } from 'slices';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    loading: loadingSlice.reducer,
    widgets: widgetsSlice.reducer,
    todos: todosSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: [...getDefaultMiddleware()],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;

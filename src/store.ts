import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { loadingSlice, widgetsSlice, todosSlice, userSlice } from 'slices';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const persistConfig = {
  key: 'user',
  storage,
};

const store = configureStore({
  reducer: {
    loading: loadingSlice.reducer,
    widgets: widgetsSlice.reducer,
    todos: todosSlice.reducer,
    user: persistReducer(persistConfig, userSlice.reducer),
  },
  middleware: [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;

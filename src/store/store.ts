import { configureStore } from '@reduxjs/toolkit';
import { searchReducer, profileReducer } from 'store/slices';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

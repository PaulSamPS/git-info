import { configureStore } from '@reduxjs/toolkit';
import { profileReducer } from 'entities/Profile/model/profileSlice';
import { searchReducer } from 'entities/Search/models/searchSlice';

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

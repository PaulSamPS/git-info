import { LocalGithubUser } from 'types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { profileAction } from 'redux/profile';

type UserSlice = {
  user: LocalGithubUser;
  error: string | null | unknown;
  isLoading: boolean;
};

const initialState: UserSlice = {
  user: {} as LocalGithubUser,
  error: null,
  isLoading: false,
};

const profileUser = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(profileAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        profileAction.fulfilled,
        (state, action: PayloadAction<LocalGithubUser>) => {
          state.user = action.payload;
          state.error = null;
          state.isLoading = false;
        }
      )
      .addCase(profileAction.rejected, (state, action) => {
        state.error = action.payload;
        state.user = {} as LocalGithubUser;
        state.isLoading = false;
      });
  },
});

export const profileReducer = profileUser.reducer;

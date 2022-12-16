import { LocalGithubUser } from 'types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from 'packages/tasks';

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
      .addCase(Profile.getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        Profile.getProfile.fulfilled,
        (state, action: PayloadAction<LocalGithubUser>) => {
          state.user = action.payload;
          state.error = null;
          state.isLoading = false;
        }
      )
      .addCase(Profile.getProfile.rejected, (state, action) => {
        state.error = action.payload;
        state.user = {} as LocalGithubUser;
        state.isLoading = false;
      });
  },
});

export const profileReducer = profileUser.reducer;

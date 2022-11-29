import { LocalSearch, LocalSearchUsersItem } from 'types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { extractSearchItems } from 'helpers/extract';
import { searchAction } from 'redux/search';

type UserSlice = {
  users: LocalSearchUsersItem[];
  error: string | null | unknown;
  isLoading: boolean;
  totalCount: number | null;
  currentPage: number;
  text: string;
};

const initialState: UserSlice = {
  users: [],
  error: null,
  isLoading: false,
  totalCount: null,
  currentPage: 1,
  text: '',
};

const searchUsers = createSlice({
  name: 'search-users',
  initialState,
  reducers: {
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
    setError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        searchAction.fulfilled,
        (state, action: PayloadAction<LocalSearch>) => {
          const { totalCount, items } = action.payload;
          state.users = extractSearchItems(items);
          state.totalCount = totalCount;
          state.error = null;
          state.isLoading = false;
        }
      )
      .addCase(searchAction.rejected, (state, action) => {
        state.error = action.payload;
        state.text = '';
        state.users = [];
        state.totalCount = null;
        state.isLoading = false;
      });
  },
});

export const { setText, setError } = searchUsers.actions;

export const usersReducer = searchUsers.reducer;

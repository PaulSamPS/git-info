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
  scrollError: string | null | unknown;
};

const initialState: UserSlice = {
  users: [],
  error: null,
  isLoading: false,
  totalCount: null,
  currentPage: 1,
  text: '',
  scrollError: null,
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
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchAction.search.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        searchAction.search.fulfilled,
        (state, action: PayloadAction<LocalSearch>) => {
          const { totalCount, items } = action.payload;

          state.users = extractSearchItems(items);
          state.totalCount = totalCount;
          state.error = null;
          state.isLoading = false;
          state.currentPage = 1;
        }
      )
      .addCase(searchAction.search.rejected, (state, action) => {
        state.error = action.payload;
        state.text = '';
        state.users = [];
        state.totalCount = null;
        state.isLoading = false;
      })
      .addCase(searchAction.searchLoading.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        searchAction.searchLoading.fulfilled,
        (state, action: PayloadAction<LocalSearch>) => {
          const { totalCount, items } = action.payload;

          state.users = state.users.concat(extractSearchItems(items));
          state.isLoading = false;
          state.totalCount = totalCount;
        }
      )
      .addCase(searchAction.searchLoading.rejected, (state, action) => {
        state.scrollError = action.payload;
        state.isLoading = false;
      });
  },
});

export const searchSlice = searchUsers.actions;

export const searchReducer = searchUsers.reducer;

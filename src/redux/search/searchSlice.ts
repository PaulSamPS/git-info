import { LocalSearch, LocalSearchUsersItem } from 'types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { extractSearchItems } from 'helpers/extract';
import { searchAction } from 'redux/search';

type UserSlice = {
  users: LocalSearchUsersItem[];
  error: string;
  isLoading: boolean;
  totalCount: number | null;
  currentPage: number;
  text: string;
};

const initialState: UserSlice = {
  users: [],
  error: '',
  isLoading: false,
  totalCount: null,
  currentPage: 1,
  text: '',
};

const searchUsers = createSlice({
  name: 'search-users',
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.text = action.payload;
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
          state.error = '';
          state.isLoading = false;
        }
      )
      .addCase(searchAction.rejected, (state, action) => {
        state.error = action.error.message || 'Ошибка получения данных...';
        state.users = [];
        state.totalCount = 0;
        state.text = '';
        state.isLoading = false;
      });
  },
});

export const { setSearchText } = searchUsers.actions;

export const usersReducer = searchUsers.reducer;

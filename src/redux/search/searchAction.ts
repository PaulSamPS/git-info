import { createAsyncThunk } from '@reduxjs/toolkit';
import { extractSearch } from 'helpers/extract';
import { searchScrollLoading, searchUsers } from 'redux/http';

type ScrollLoading = {
  username: string;
  page: number;
};

export const search = createAsyncThunk(
  'search-users',
  async (username: string, { rejectWithValue }) => {
    try {
      const data = await searchUsers(username);
      return extractSearch(data);
    } catch (err) {
      return rejectWithValue('Ошибка загрузки данных...');
    }
  }
);

export const searchLoading = createAsyncThunk(
  'search-users/scroll',
  async ({ username, page }: ScrollLoading, { rejectWithValue }) => {
    try {
      const data = await searchScrollLoading(username, page);
      return extractSearch(data);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

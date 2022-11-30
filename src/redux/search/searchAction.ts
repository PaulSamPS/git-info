import { createAsyncThunk } from '@reduxjs/toolkit';
import { searchScrollLoading, searchUsers } from 'redux/http';

type ScrollLoading = {
  username: string;
  page: number;
};

export const search = createAsyncThunk(
  'search-users',
  async (username: string, { rejectWithValue }) => {
    try {
      return await searchUsers(username);
    } catch (err) {
      return rejectWithValue('Ошибка загрузки данных...');
    }
  }
);

export const searchLoading = createAsyncThunk(
  'search-users/scroll',
  async ({ username, page }: ScrollLoading, { rejectWithValue }) => {
    try {
      return await searchScrollLoading(username, page);
    } catch (err) {
      return rejectWithValue('Ошибка загрузки данных...');
    }
  }
);

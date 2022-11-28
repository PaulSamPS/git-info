import { createAsyncThunk } from '@reduxjs/toolkit';
import { extractSearch } from 'helpers/extract';
import { searchUsers } from 'redux/http';

export const searchAction = createAsyncThunk(
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

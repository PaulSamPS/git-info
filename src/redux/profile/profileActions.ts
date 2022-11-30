import { createAsyncThunk } from '@reduxjs/toolkit';
import { profile } from 'redux/http';
import { extractUser } from 'helpers/extract';

export const profileAction = createAsyncThunk(
  'profile',
  async (username: string, { rejectWithValue }) => {
    try {
      const data = await profile(username);
      return extractUser(data);
    } catch (err) {
      return rejectWithValue('Ошибка загрузки профиля...');
    }
  }
);

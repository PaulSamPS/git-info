import { createAsyncThunk } from '@reduxjs/toolkit';
import { profile } from 'redux/http';

export const profileAction = createAsyncThunk(
  'profile',
  async (username: string, { rejectWithValue }) => {
    try {
      return await profile(username);
    } catch (err) {
      return rejectWithValue('Ошибка загрузки профиля...');
    }
  }
);

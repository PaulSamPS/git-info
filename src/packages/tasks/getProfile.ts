import { createAsyncThunk } from '@reduxjs/toolkit';
import { profile } from 'packages/requests';

export const getProfile = createAsyncThunk(
  'profile',
  async (username: string, { rejectWithValue }) => {
    try {
      return await profile(username);
    } catch (err) {
      return rejectWithValue('Ошибка загрузки профиля...');
    }
  }
);

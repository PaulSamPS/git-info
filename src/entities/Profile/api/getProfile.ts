import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GithubUser } from 'shared/types';
import { BASE_URL } from 'shared/const/baseUrl';
import { extractUser } from 'shared/lib/extract';

export const getProfile = createAsyncThunk(
  'profile',
  async (username: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<GithubUser>(
        `${BASE_URL}/users/${username}`
      );
      return extractUser(data);
    } catch (err) {
      return rejectWithValue('Ошибка загрузки профиля...');
    }
  }
);

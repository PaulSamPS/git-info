import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Search } from 'shared/types';
import { BASE_URL } from 'shared/const/baseUrl';
import { extractSearch } from 'shared/lib/extract';

export const getSearch = createAsyncThunk(
  'getSearch-users',
  async (username: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<Search>(
        `${BASE_URL}/search/users?q=${username}&page=1&per_page=30`
      );

      return extractSearch(data);
    } catch (err) {
      return rejectWithValue('Ошибка загрузки данных...');
    }
  }
);

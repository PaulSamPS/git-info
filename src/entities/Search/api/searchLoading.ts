import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Search } from 'shared/types';
import { BASE_URL } from 'shared/const/baseUrl';
import { extractSearch } from 'shared/lib/extract';

type ScrollLoading = {
  username: string;
  page: number;
};

export const searchLoading = createAsyncThunk(
  'getSearch-users/scroll',
  async ({ username, page }: ScrollLoading, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<Search>(
        `${BASE_URL}/search/users?q=${username}&page=${page}&per_page=30`
      );

      return extractSearch(data);
    } catch (err) {
      return rejectWithValue('Ошибка загрузки данных...');
    }
  }
);

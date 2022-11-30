import axios from 'axios';
import { Search } from 'types';

const BASE_URL = 'https://api.github.com';

export const searchUsers = async (username: string) => {
  const { data } = await axios.get<Search>(
    `${BASE_URL}/search/users?q=${username}&page=1&per_page=30`
  );

  return data;
};

export const searchScrollLoading = async (username: string, page: number) => {
  const { data } = await axios.get<Search>(
    `${BASE_URL}1/search/users?q=${username}&page=${page}&per_page=30`
  );

  return data;
};

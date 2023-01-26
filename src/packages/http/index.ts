import axios from 'axios';
import { GithubUser, Search } from 'types';
import { extractSearch, extractUser } from 'helpers/extract';

const BASE_URL = 'https://api.github.com';

export const searchUsers = async (username: string) => {
  const { data } = await axios.get<Search>(
    `${BASE_URL}/search/users?q=${username}&page=1&per_page=30`
  );

  return extractSearch(data);
};

export const searchScrollLoading = async (username: string, page: number) => {
  const { data } = await axios.get<Search>(
    `${BASE_URL}/search/users?q=${username}&page=${page}&per_page=30`
  );

  return extractSearch(data);
};

export const profile = async (username: string) => {
  const { data } = await axios.get<GithubUser>(`${BASE_URL}/users/${username}`);

  return extractUser(data);
};

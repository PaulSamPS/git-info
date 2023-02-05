import { GithubUser, LocalGithubUser } from './user';

export interface SearchUsersItem
  extends Pick<GithubUser, 'login' | 'avatar_url'> {}

export interface LocalSearchUsersItem
  extends Pick<LocalGithubUser, 'login' | 'avatar'> {}

export type Search = {
  total_count: number;
  items: SearchUsersItem[];
};

export type LocalSearch = {
  totalCount: number;
  items: SearchUsersItem[];
};

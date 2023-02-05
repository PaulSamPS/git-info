import {
  GithubUser,
  LocalGithubUser,
  LocalSearch,
  LocalSearchUsersItem,
  Search,
  SearchUsersItem,
} from 'shared/types';

export const extractUser = (user: GithubUser): LocalGithubUser => ({
  id: user.id,
  login: user.login,
  avatar: user.avatar_url,
  name: user.name,
  company: user.company,
  location: user.location,
  bio: user.bio,
  blog: user.blog,
  twitter: user.twitter_username,
  github: user.html_url,
  repos: user.public_repos,
  followers: user.followers,
  following: user.following,
  created: user.created_at,
});

export const extractSearch = (data: Search): LocalSearch => ({
  totalCount: data.total_count,
  items: data.items,
});

export const extractSearchItems = (
  items: SearchUsersItem[]
): LocalSearchUsersItem[] =>
  items.map((el) => ({ avatar: el.avatar_url, login: el.login }));

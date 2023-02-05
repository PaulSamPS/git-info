export type LocalGithubUser = {
  id: number;
  login: string;
  avatar: string | null;
  name: string | null;
  company: string | null;
  location: string | null;
  bio: string | null;
  blog: string | null;
  twitter: string | null;
  github: string;
  repos: number;
  followers: number;
  following: number;
  created: string;
};

export type GithubUser = {
  id: number;
  login: string;
  avatar_url: string | null;
  name: string | null;
  company: string | null;
  location: string | null;
  bio: string | null;
  blog: string | null;
  twitter_username: string | null;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

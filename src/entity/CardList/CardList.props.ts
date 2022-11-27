import { LocalGithubUser } from 'types';

export interface CardListProps
  extends Pick<LocalGithubUser, 'avatar' | 'login'> {}

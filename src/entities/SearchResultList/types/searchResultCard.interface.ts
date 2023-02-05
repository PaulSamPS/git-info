import { LocalGithubUser } from 'shared/types';

export interface SearchResultCardProps
  extends Pick<LocalGithubUser, 'avatar' | 'login'> {
  desc: string;
}

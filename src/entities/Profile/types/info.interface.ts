import { LocalGithubUser } from 'shared/types';

export interface InfoType
  extends Pick<LocalGithubUser, 'company' | 'twitter' | 'blog' | 'location'> {}

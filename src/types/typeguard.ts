import { LocalGithubUser } from './user';
import { LocalSearchUsersItem } from './search';

export const isLocalSearchUsers = (
  user: LocalGithubUser | LocalSearchUsersItem
): user is LocalGithubUser => 'id' in user;

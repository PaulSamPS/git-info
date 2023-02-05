import React from 'react';
import { LocalGithubUser } from 'shared/types';
import { useParams } from 'react-router-dom';
import { useAppTasks } from 'shared/lib/hooks';
import { getStateProfile } from 'shared/lib/getStateProfile';
import { useLocalDate } from './useLocalDate';

type UseProfile = {
  user: LocalGithubUser;
  joinedDate: string;
  isLoading: boolean;
};

export const useProfile = (): UseProfile => {
  const { username } = useParams();
  const getData = useAppTasks();
  const state = getStateProfile();
  const joinedDate = useLocalDate(state.user.created);

  React.useEffect(() => {
    if (username) {
      getData.getProfileData(username);
    }
  }, []);

  return { user: state.user, joinedDate, isLoading: state.isLoading };
};

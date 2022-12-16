import React from 'react';
import { LocalGithubUser } from 'types';
import { useParams } from 'react-router-dom';
import { useLocalDate } from 'hooks';
import { State } from 'packages/tasks';
import { useTasks } from 'packages';

type UseUser = {
  user: LocalGithubUser;
  joinedDate: string;
  isLoading: boolean;
};

export const useUser = (): UseUser => {
  const { username } = useParams();
  const getData = useTasks();
  const state = State.getStateProfile();
  const joinedDate = useLocalDate(state.user.created);

  React.useEffect(() => {
    if (username) {
      getData.getProfileData(username);
    }
  }, []);

  return { user: state.user, joinedDate, isLoading: state.isLoading };
};

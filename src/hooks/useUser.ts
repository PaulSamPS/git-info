import React from 'react';
import { LocalGithubUser } from 'types';
import { useParams } from 'react-router-dom';
import { useLocalDate, useStoreActions } from 'hooks';
import { getStateUser } from 'helpers';

type UseUser = {
  user: LocalGithubUser;
  joinedDate: string;
  isLoading: boolean;
};

export const useUser = (): UseUser => {
  const { username } = useParams();
  const getData = useStoreActions();
  const state = getStateUser();
  const joinedDate = useLocalDate(state.user.created);

  React.useEffect(() => {
    if (username) {
      getData.getProfileData(username);
    }
  }, []);

  return { user: state.user, joinedDate, isLoading: state.isLoading };
};

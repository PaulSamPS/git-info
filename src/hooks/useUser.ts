import React from 'react';
import { profileAction, profileSelector } from 'redux/profile';
import { LocalGithubUser } from 'types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from './useAppDispatch';
import { useLocalDate } from './useLocalDate';

type UseUser = {
  user: LocalGithubUser;
  joinedDate: string;
  isLoading: boolean;
};

export const useUser = (): UseUser => {
  const { username } = useParams();
  const dispatch = useAppDispatch();
  const { user, isLoading } = useSelector(profileSelector);
  const joinedDate = useLocalDate(user.created);

  React.useEffect(() => {
    if (username) {
      dispatch(profileAction(username));
    }
  }, []);

  return { user, joinedDate, isLoading };
};

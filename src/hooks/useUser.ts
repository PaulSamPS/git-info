import React from 'react';
import { profileAction, profileSelector } from 'redux/profile';
import { LocalGithubUser } from 'types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from './useAppDispatch';

type UseUser = {
  user: LocalGithubUser;
  joinedDate: string;
  isLoading: boolean;
};

const localDate = new Intl.DateTimeFormat('ru-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export const useUser = (): UseUser => {
  const { username } = useParams();
  const { user, isLoading } = useSelector(profileSelector);
  const [joinedDate, setJoinedDate] = React.useState<string>('');
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (typeof username === 'string') {
      dispatch(profileAction(username));
    }
  }, []);

  React.useEffect(() => {
    if (user.created) {
      setJoinedDate(localDate.format(new Date(user.created)));
    }
  }, [user.created]);

  return { user, joinedDate, isLoading };
};

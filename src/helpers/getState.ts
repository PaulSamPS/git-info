import { useSelector } from 'react-redux';
import { searchSelector } from 'redux/search';
import { profileSelector } from '../redux/profile';

export const getState = () => {
  const {
    isLoading,
    error,
    text,
    currentPage,
    totalCount,
    users,
    scrollError,
  } = useSelector(searchSelector);

  return {
    isLoading,
    error,
    text,
    currentPage,
    totalCount,
    users,
    scrollError,
  };
};

export const getStateUser = () => {
  const { user, isLoading } = useSelector(profileSelector);

  return { user, isLoading };
};

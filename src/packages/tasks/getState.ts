import { useSelector } from 'react-redux';
import { profile, search } from 'packages/getStore';

export const getStateSearch = () => {
  const {
    isLoading,
    error,
    text,
    currentPage,
    totalCount,
    users,
    scrollError,
  } = useSelector(search);

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

export const getStateProfile = () => {
  const { user, isLoading } = useSelector(profile);

  return { user, isLoading };
};

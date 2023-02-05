import { useSelector } from 'react-redux';
import { search } from '../../entities/Search/models/selector';

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

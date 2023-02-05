import { useSelector } from 'react-redux';
import { profile } from '../../entities/Profile/model/selector';

export const getStateProfile = () => {
  const { user, isLoading } = useSelector(profile);

  return { user, isLoading };
};

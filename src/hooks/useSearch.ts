import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { searchAction, setError, setText } from 'redux/search';
import { useSelector } from 'react-redux';
import { searchSelector } from 'redux/selector';

type UseSearch = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
  isLoading: boolean;
  error: string;
};

export const useSearch = (): UseSearch => {
  const [search, setSearch] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const { isLoading, error } = useSelector(searchSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (search.length > 0 && error) {
      dispatch(setError());
    }
  }, [search]);

  useEffect(() => {
    if (search.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [search]);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();

      if (search.trim()) {
        dispatch(searchAction(search));
        dispatch(setText(search));
        e.currentTarget.reset();
        setIsDisabled(true);
        navigate('/');
      }
    },
    [search]
  );

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  }, []);

  return <UseSearch>{
    handleSubmit,
    handleOnChange,
    isDisabled,
    isLoading,
    error,
  };
};

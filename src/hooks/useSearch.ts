import React, { ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { State } from 'packages/tasks';
import { useTasks } from 'packages';

type UseSearch = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
  isLoading: boolean;
};

export const useSearch = (): UseSearch => {
  const state = State.getStateSearch();
  const store = useTasks();
  const navigate = useNavigate();

  const [search, setSearch] = React.useState<string>('');
  const [isDisabled, setIsDisabled] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (search.length > 0 && state.error) {
      store.setError();
    }
  }, [search]);

  React.useEffect(() => {
    if (search.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [search]);

  const handleSubmit = React.useCallback(
    (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();

      if (search.trim()) {
        navigate('/getSearch');
        store.getUsersData(search);
        e.currentTarget.reset();
        setIsDisabled(true);
      }
    },
    [search]
  );

  const handleOnChange = React.useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setSearch(value);
    },
    []
  );

  return {
    handleSubmit,
    handleOnChange,
    isDisabled,
    isLoading: state.isLoading,
  };
};

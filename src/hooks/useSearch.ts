import React, { ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { searchSlice, searchAction, searchSelector } from 'redux/search';
import { useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

type UseSearch = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
  isLoading: boolean;
  error: string;
};

export const useSearch = (): UseSearch => {
  const {
    isLoading,
    error,
    text,
    currentPage,
    totalCount,
    users,
    scrollError,
  } = useSelector(searchSelector);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = React.useState<string>('');
  const [isDisabled, setIsDisabled] = React.useState<boolean>(true);
  const [isFetching, setIsFetching] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (search.length > 0 && error) {
      dispatch(searchSlice.setError());
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
        dispatch(searchAction.search(search));
        dispatch(searchSlice.setText(search));
        e.currentTarget.reset();
        setIsDisabled(true);
        navigate('/');
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

  // ScrollLoading

  React.useEffect(() => {
    if (isFetching) {
      dispatch(
        searchAction.searchLoading({ username: text, page: currentPage })
      );
      setIsFetching(false);
    }
  }, [isFetching]);

  const scrollHandler = () => {
    const { scrollHeight, scrollTop } = document.documentElement;
    if (
      scrollHeight - (scrollTop + window.innerHeight) < 100 &&
      users.length < totalCount! &&
      !scrollError
    ) {
      dispatch(searchSlice.setCurrentPage(1));
      setIsFetching(true);
    }
  };

  const debounceScrollHandler = React.useCallback(
    debounce(() => {
      scrollHandler();
    }, 300),
    [users, scrollError]
  );

  React.useEffect(() => {
    document.addEventListener('scroll', debounceScrollHandler);

    return () => {
      document.removeEventListener('scroll', debounceScrollHandler);
    };
  }, [users, scrollError]);

  return <UseSearch>{
    handleSubmit,
    handleOnChange,
    isDisabled,
    isLoading,
    error,
  };
};

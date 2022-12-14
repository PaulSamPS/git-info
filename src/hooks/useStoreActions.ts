import { searchAction, searchSlice } from 'redux/search';
import { useAppDispatch } from 'hooks';
import React from 'react';
import { profileAction } from 'redux/profile';

export const useStoreActions = () => {
  const dispatch = useAppDispatch();

  const getUsersData = React.useCallback((query: string) => {
    dispatch(searchAction.search(query));
    dispatch(searchSlice.setText(query));
  }, []);

  const getProfileData = React.useCallback((username: string) => {
    dispatch(profileAction(username));
  }, []);

  const setError = React.useCallback(() => {
    dispatch(searchSlice.setError());
  }, []);

  const getUserDataScroll = React.useCallback(
    (text: string, currentPage: number) => {
      dispatch(
        searchAction.searchLoading({ username: text, page: currentPage })
      );
    },
    []
  );

  const setPage = React.useCallback(() => {
    dispatch(searchSlice.setCurrentPage(1));
  }, []);

  return { getUsersData, setError, getUserDataScroll, setPage, getProfileData };
};

import { searchSlice } from 'store/slices';
import { useAppDispatch } from 'hooks';
import React from 'react';
import { Search, Profile } from 'packages/tasks';

interface UseTasks {
  getUsersData: (value: string) => void;
  setError: () => void;
  getUserDataScroll: (text: string, currentPage: number) => void;
  setPage: () => void;
  getProfileData: (username: string) => void;
}

export const useTasks = (): UseTasks => {
  const dispatch = useAppDispatch();

  const getUsersData = React.useCallback((query: string) => {
    dispatch(Search.getSearch(query));
    dispatch(searchSlice.setText(query));
  }, []);

  const getProfileData = React.useCallback((username: string) => {
    dispatch(Profile.getProfile(username));
  }, []);

  const setError = React.useCallback(() => {
    dispatch(searchSlice.setError());
  }, []);

  const getUserDataScroll = React.useCallback(
    (text: string, currentPage: number) => {
      dispatch(Search.searchLoading({ username: text, page: currentPage }));
    },
    []
  );

  const setPage = React.useCallback(() => {
    dispatch(searchSlice.setCurrentPage(1));
  }, []);

  return { getUsersData, setError, getUserDataScroll, setPage, getProfileData };
};

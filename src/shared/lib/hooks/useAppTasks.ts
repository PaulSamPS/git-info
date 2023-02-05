import React from 'react';
import { getSearch, searchLoading } from 'entities/Search/api';
import { getProfile } from 'entities/Profile/api';
import { searchSlice } from 'entities/Search/models/searchSlice';
import { useAppDispatch } from './useAppDispatch';

interface UseAppTasks {
  getUsersData: (value: string) => void;
  setError: () => void;
  getUserDataScroll: (text: string, currentPage: number) => void;
  setPage: () => void;
  getProfileData: (username: string) => void;
}

export const useAppTasks = (): UseAppTasks => {
  const dispatch = useAppDispatch();

  const getUsersData = React.useCallback((query: string) => {
    dispatch(getSearch(query));
    dispatch(searchSlice.setText(query));
  }, []);

  const getProfileData = React.useCallback((username: string) => {
    dispatch(getProfile(username));
  }, []);

  const setError = React.useCallback(() => {
    dispatch(searchSlice.setError());
  }, []);

  const getUserDataScroll = React.useCallback(
    (text: string, currentPage: number) => {
      dispatch(searchLoading({ username: text, page: currentPage }));
    },
    []
  );

  const setPage = React.useCallback(() => {
    dispatch(searchSlice.setCurrentPage(1));
  }, []);

  return { getUsersData, setError, getUserDataScroll, setPage, getProfileData };
};

import React from 'react';
import { Error, NotFound, SearchResultCard, Spinner } from 'components/Blocks';
import { useScrollLoading } from 'hooks';
import { SearchInfo } from 'entity/SearchResult';
import { Intro } from 'entity';
import { getState } from 'helpers';

export const SearchResult = () => {
  const state = getState();
  useScrollLoading();

  return (
    <>
      <NotFound totalCount={state.totalCount}>Ничего не найденно...</NotFound>
      <SearchInfo totalCount={state.totalCount} text={state.text} />
      {state.users.map((user, index) => (
        <SearchResultCard
          desc='посмотреть профиль'
          key={index}
          login={user.login}
          avatar={user.avatar}
        />
      ))}
      {state.users.length <= 0 && !state.isLoading && <Intro />}
      {state.isLoading && <Spinner />}
      <Error err={state.scrollError && !state.error} isBlock />
      <Error err={state.error && !state.scrollError} isBlock />
    </>
  );
};

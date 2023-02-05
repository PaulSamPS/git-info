import React from 'react';
import { useScrollLoading } from 'shared/lib/hooks';
import { SearchResultText } from 'entities/SearchResultText';
import { Intro } from 'entities/Intro';
import emoji from 'shared/assets/emoji.png';
import { NotFound } from 'shared/ui/NotFound';
import { SearchResultList } from 'entities/SearchResultList';
import { getStateSearch } from 'shared/lib/getStateSearch';
import { Spinner } from 'shared/ui/Spinner';
import { Error } from 'shared/ui/Error';

export const SearchResult = () => {
  const { users, isLoading, totalCount, text, scrollError, error } =
    getStateSearch();
  useScrollLoading();

  return (
    <>
      <NotFound totalCount={totalCount}>Ничего не найденно...</NotFound>
      <SearchResultText totalCount={totalCount} text={text} />
      <SearchResultList users={users} />
      {users.length <= 0 && !isLoading && (
        <Intro
          icon={emoji}
          alt='backhand index pointing up'
          text='Введите имя пользователя для поиска.'
        />
      )}
      {isLoading && <Spinner />}
      <Error err={scrollError && !error} isBlock />
      <Error err={error && !scrollError} isBlock />
    </>
  );
};

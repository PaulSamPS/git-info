import React from 'react';
import { Error, NotFound, SearchResultCard, Spinner } from 'components/Blocks';
import { useSearch } from 'hooks';
import { SearchInfo } from 'entity/SearchResult';

export const SearchResult = () => {
  const { users, isLoading, totalCount, text, scrollError, error } =
    useSearch();

  return (
    <>
      <NotFound totalCount={totalCount}>Ничего не найденно...</NotFound>
      <SearchInfo totalCount={totalCount} text={text} />
      {users.map((user, index) => (
        <SearchResultCard
          desc='посмотреть профиль'
          key={index}
          login={user.login}
          avatar={user.avatar}
        />
      ))}
      {isLoading && <Spinner position='absolute' />}
      {scrollError && !error && <Error isBlock>{scrollError.toString()}</Error>}
      {error && !scrollError && <Error isBlock>{error}</Error>}
    </>
  );
};

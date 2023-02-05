import React from 'react';
import { SearchResultCard } from './ui/SearchResultCard';
import { SearchResultListProps } from './types';

export const SearchResultList = ({ users }: SearchResultListProps) => (
  <>
    {users.map((user, index) => (
      <SearchResultCard
        desc='посмотреть профиль'
        key={index}
        login={user.login}
        avatar={user.avatar}
      />
    ))}
  </>
);

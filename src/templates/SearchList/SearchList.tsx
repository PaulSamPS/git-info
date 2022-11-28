import React from 'react';
import { CardList } from 'entity';
import { useSelector } from 'react-redux';
import { Card, Spinner } from 'components';
import { selector } from '../../redux/selector';

export const SearchList = () => {
  const { users, isLoading } = useSelector(selector);

  return (
    <main>
      {isLoading ? (
        <Card>
          <Spinner position='absolute' />
        </Card>
      ) : (
        users.map((user) => (
          <CardList key={user.login} login={user.login} avatar={user.avatar} />
        ))
      )}
    </main>
  );
};

import React from 'react';
import { CardList } from 'entity';
import { useSelector } from 'react-redux';
import { Card, Spinner } from 'components';
import { selector } from 'redux/selector';
import { Text } from 'components/Typography';
import { endOf } from 'helpers';

export const SearchList = () => {
  const { users, isLoading, totalCount, text } = useSelector(selector);

  return (
    <main>
      {totalCount && (
        <Text style={{ marginTop: '20px' }}>
          {`По запросу ${text} найденно ${totalCount} ${endOf(
            totalCount,
            'пользователь',
            'пользователя',
            'пользователей'
          )}`}
        </Text>
      )}
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

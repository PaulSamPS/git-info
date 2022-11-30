import React from 'react';
import { CardList } from 'entity';
import { Card, Error, Spinner } from 'components';
import { Text } from 'components/Typography';
import { endOf } from 'helpers';
import { useSelector } from 'react-redux';
import { searchSelector } from 'redux/selector';

export const SearchList = () => {
  const { users, isLoading, totalCount, text, scrollError } =
    useSelector(searchSelector);

  return (
    <>
      {totalCount && (
        <Text style={{ marginTop: '20px' }}>
          {`По запросу ${text} ${endOf(
            totalCount,
            'найден',
            'найденно',
            'найденны'
          )} ${totalCount} ${endOf(
            totalCount,
            'пользователь',
            'пользователя',
            'пользователей'
          )}`}
        </Text>
      )}
      {users.map((user, index) => (
        <CardList key={index} login={user.login} avatar={user.avatar} />
      ))}
      {isLoading && (
        <Card>
          <Spinner position='absolute' />
        </Card>
      )}
      {scrollError && <Error isBlock>{scrollError.toString()}</Error>}
    </>
  );
};

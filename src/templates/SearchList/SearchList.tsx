import React from 'react';
import { CardList } from 'entity';
import { Card, Error, Spinner } from 'components/Blocks';
import { Text } from 'components/Typography';
import { endOf } from 'helpers';
import { useSelector } from 'react-redux';
import { searchAction, searchSelector, searchSlice } from 'redux/search';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';

export const SearchList = () => {
  const { users, isLoading, totalCount, text, scrollError, error } =
    useSelector(searchSelector);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('user');
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (query) {
      dispatch(searchAction.search(query));
      dispatch(searchSlice.setText(query));
    }
  }, [query]);

  return (
    <>
      {totalCount !== null && totalCount <= 0 && (
        <Text tabIndex={0} center>
          Ничего не найденно...
        </Text>
      )}
      {totalCount !== null && totalCount > 0 && (
        <Text tabIndex={0} center>
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
      {error && <Error isBlock>{error.toString()}</Error>}
    </>
  );
};

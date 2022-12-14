import React from 'react';
import { Text } from 'components/Typography';
import { endOf } from 'helpers';

type SearchInfoProps = {
  totalCount: number | null;
  text: string;
};

export const SearchInfo = ({ totalCount, text }: SearchInfoProps) => {
  const found = React.useMemo(
    () => endOf(totalCount, 'найден', 'найденно', 'найденны'),
    [totalCount]
  );

  const user = React.useMemo(
    () => endOf(totalCount, 'пользователь', 'пользователя', 'пользователей'),
    [totalCount]
  );

  return (
    <div>
      {totalCount !== null && totalCount > 0 && (
        <Text tabIndex={0} center>
          {`По запросу ${text} ${found} ${totalCount} ${user}`}
        </Text>
      )}
    </div>
  );
};

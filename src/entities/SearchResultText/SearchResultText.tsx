import React from 'react';
import { Text } from 'shared/ui/Text';
import { endOf } from 'entities/SearchResultText/lib/endOf';
import { SearchInfoProps } from './types/searchInfo.type';

export const SearchResultText = ({ totalCount, text }: SearchInfoProps) => {
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

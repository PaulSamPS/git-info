import React from 'react';
import { localDate } from '../../consts';

export const useLocalDate = (date: string) => {
  const [joinedDate, setJoinedDate] = React.useState<string>('');

  React.useEffect(() => {
    if (date) {
      setJoinedDate(localDate.format(new Date(date)));
    }
  }, [date]);

  return joinedDate;
};

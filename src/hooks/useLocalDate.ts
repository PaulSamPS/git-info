import React from 'react';

export const useLocalDate = (date: string) => {
  const [joinedDate, setJoinedDate] = React.useState<string>('');

  const localDate = new Intl.DateTimeFormat('ru-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  React.useEffect(() => {
    if (date) {
      setJoinedDate(localDate.format(new Date(date)));
    }
  }, [date]);

  return joinedDate;
};

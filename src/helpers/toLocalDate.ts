export const toLocalDate = (created: string): string => {
  const localDate = new Intl.DateTimeFormat('ru-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return localDate.format(new Date(created));
};

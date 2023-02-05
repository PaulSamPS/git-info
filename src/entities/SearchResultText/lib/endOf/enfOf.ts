export const endOf = (
  value: number | null,
  first: string,
  second: string,
  third: string
) => {
  let number = Math.abs(value || 0);

  number %= 100;

  if (number >= 5 && number <= 20) {
    return third;
  }

  number %= 10;

  if (number === 1) {
    return first;
  }

  if (number >= 2 && number <= 4) {
    return second;
  }

  return third;
};

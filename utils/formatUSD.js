/* eslint-disable import/prefer-default-export */
const formatUSD = (number) => {
  const string = JSON.stringify(number);
  const { length } = string;
  return JSON.parse(
    `${string.substring(0, length - 2)}.${string.substring(length - 2)}`
  ).toFixed(2);
};

export { formatUSD };

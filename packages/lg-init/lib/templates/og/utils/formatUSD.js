/* eslint-disable import/prefer-default-export */
const formatUSD = (number) => {
  // for inconsistent types
  const string = JSON.stringify(parseFloat(number));
  const { length } = string || number;
  const str = `${string.substring(0, length - 2)}.${string.substring(
    length - 2
  )}`;
  return parseFloat(str).toFixed(2);
};

export { formatUSD };

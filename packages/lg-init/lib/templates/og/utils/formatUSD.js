/* eslint-disable import/prefer-default-export */
const formatUSD = (number) => {     
  const { length } = number;
  const str = `${number.substring(0, length - 2)}.${number.substring(length - 2)}`;  
  return parseFloat(str).toFixed(2)
};

export { formatUSD };

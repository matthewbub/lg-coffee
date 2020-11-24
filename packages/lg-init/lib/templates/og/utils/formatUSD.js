/* eslint-disable import/prefer-default-export */
const formatUSD = (value) => {
  
  return !isNaN(value) && 
    parseInt(Number(value)) == value && 
    !isNaN(parseInt(value, 10));
  
  // if(!number) return;
  // else if (number ) {
  //   const string = JSON.stringify(number);
  //   const { length } = string;
  //   return JSON.parse(
  //     `${string.substring(0, length - 2)}.${string.substring(length - 2)}`
  //   ).toFixed(2);
  // }
  
};

export { formatUSD };

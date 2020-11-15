// // example arg
const datas = {
  one: {
    price: '287',
    qty: '5',
  },
  two: {
    price: '233',
    qty: '3',
  },
};
const handleUSDChange = (number) => {
  const string = JSON.stringify(number);
  const { length } = string;
  return JSON.parse(
    `${string.substring(0, length - 2)}.${string.substring(length - 2)}`,
  );
};

const keys = async (cart) => {
  const container = [];
  Object.keys(cart).map((i) => (
    container.push(JSON.parse(cart[i].price) * JSON.parse(cart[i].qty))
  ));
  return container.reduce((x, y) => x + y, 0);
};

module.exports = (cart, currencyType) => {
  if (currencyType === 'USD') {
    keys(cart).then((res) => handleUSDChange(res));
  } else {
    return keys(cart);
  }
};

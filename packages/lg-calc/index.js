const handleUSDChange = (number) => {
  const string = JSON.stringify(number);
  const { length } = string;
  return JSON.parse(
    `${string.substring(0, length - 2)}.${string.substring(length - 2)}`,
  );
};

const keys = (cart) => {
  const container = [];
  Object.keys(cart).map((i) => (
    container.push(JSON.parse(cart[i].price) * JSON.parse(cart[i].qty))
  ));
  return container.reduce((x, y) => x + y, 0);
};

const getFixedPrice = (cart, currencyType) => {
  if (currencyType === 'USD') {
    return handleUSDChange(keys(cart));
  }
    return keys(cart);
};

module.exports = {
  getFixedPrice: (cart, currencyType) => getFixedPrice(cart, currencyType)
}
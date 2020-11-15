module.exports = (cart) => {
  const container = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < Object.keys(cart).length; i++) {
    container.push(Object.keys(cart)[i].price * Object.keys(cart)[i].qty);
  }

  return container.reduce((x, y) => x + y, 0);
};

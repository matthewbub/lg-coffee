// example arg
// const cart = {
//   one: {
//     price: 287,
//     qty: 5,
//   },
//   two: {
//     price: 233,
//     qty: 3,
//   },
// };

module.exports = (cart) => {
  const container = [];

  Object.keys(cart).map((i) => container.push(JSON.parse(cart[i].price) * JSON.parse(cart[i].qty)));
  return container.reduce((x, y) => x + y, 0);
};

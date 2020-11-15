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

const handleCart = ({ cart }) => {
  const container = [];

  Object.keys(cart).map((i) => container.push(cart[i].price * cart[i].qty));
  return container.reduce((x, y) => x + y, 0);
};

module.exports = handleCart;

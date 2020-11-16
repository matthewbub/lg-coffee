const calc = (cart) => {
  const container = [];
  try {
    if (typeof cart !== 'object') throw new Error('Are you sure your passing an Object?');
    Object.keys(cart).map((i) => container.push(cart[i].price * cart[i].qty));
    return container.reduce((x, y) => x + y, 0);
  } catch (err) {
    return err;
  }
};

console.log(calc('o'));

module.exports = {
  calc: (cart) => calc(cart),
};

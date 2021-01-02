exports.handleSuccessfulCheckout = (cart) => {
  localStorage.removeItem('cart');
  localStorage.setItem('order-confirmation', JSON.stringify(cart));
};

/* eslint-disable no-plusplus */
const stripe = require('stripe')(process.env.SECRET_KEY);
const store = require('../../utils/store');

export default async (req, res) => {
  try {
    const products = await stripe.products.list({
      limit: 10,
    });

    const prices = await stripe.prices.list({
      limit: 10,
    });

    const data = {
      store: store.store,
      products: {},
    };

    for (let i = 0; i < products.data.length; i++) {
      for (let x = 0; x < prices.data.length; x++) {
        // if product-id matches price's product-id
        if (products.data[i].id === prices.data[x].product) {
          // assign as new product
          data.products[products.data[i].id] = {
            product: products.data[i],
            price: prices.data[x],
          };
        }
      }
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

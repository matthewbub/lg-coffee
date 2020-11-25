const stripe = require('stripe')(process.env.SECRET_KEY);
const store = require('../../utils/store');

export default async (req, res) => {
  try {
    const products = await stripe.products.list({
      limit: 10,
    });

    const data = {
      store: store.store,
      products: products.data,
    };

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

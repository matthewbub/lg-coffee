/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../components/PageWrapper';
import ProductRowComponet from '../prebuilts/ProductRowComponent';

const HomePage = ({ data, cart }) => (
  <PageWrapper data={data} cart={cart}>
    <ProductRowComponet
      heading={data.products.heading}
      products={data.products.products}
      cart={cart}
    />
  </PageWrapper>
);

HomePage.propTypes = {
  data: PropTypes.shape({
    products: PropTypes.shape({
      heading: PropTypes.string,
      products: PropTypes.arrayOf(),
    }),
  }),
  cart: PropTypes.shape({}),
};

export default HomePage;

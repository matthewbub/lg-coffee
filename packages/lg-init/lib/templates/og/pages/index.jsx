import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../components/PageWrapper';
import ProductRowComponet from '../prebuilts/ProductRowComponent';

const HomePage = ({ data, cart }) => {
  return(
    <PageWrapper data={data} cart={cart}>
      <ProductRowComponet
        heading={data.products.heading}
        products={data.products.products}
        cart={cart}
      />
    </PageWrapper>
  )
};

HomePage.propTypes = {
  data: PropTypes.shape({
    products: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      products: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
    }).isRequired,
  }).isRequired,
  cart: PropTypes.shape({}).isRequired,
};

export default HomePage;

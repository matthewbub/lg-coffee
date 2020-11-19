import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../components/PageWrapper';
import ProductRowComponet from '../prebuilts/ProductRowComponent';

const HomePage = ({ data, cart, handleUpdatedCartInState }) => {
  return(
    <PageWrapper 
      data={data} 
      cart={cart}  
      handleUpdatedCartInState={(updatedCart) => handleUpdatedCartInState(updatedCart)}
    >
      <ProductRowComponet
        heading={data.products.heading}
        products={data.products.products}
        cart={cart}
        handleUpdatedCartInState={(updatedCart) => handleUpdatedCartInState(updatedCart)}
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
  cart: PropTypes.shape({}),
  handleUpdatedCartInState: PropTypes.func.isRequired,
};

HomePage.defaultProps = {
  cart : {}
}

export default HomePage;

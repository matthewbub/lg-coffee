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
      { 
      !data.store.hero ? null :
        <div 
          className="hero_"
          style={{
            backgroundImage: `url(${data.store.hero})`,
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',          
          }}/>
      }
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
    store: PropTypes.shape({
      hero: PropTypes.string,
    }),
  }),
  cart: PropTypes.shape({}),
  handleUpdatedCartInState: PropTypes.func.isRequired,
};

HomePage.defaultProps = {
  cart : {},
  data: {
    store: {
      hero: null
    }
  }
}

export default HomePage;

import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../lib/wrappers/PageWrapper';
import Products from '../lib/prebuilts/Products';

const Index = ({ data, cart, handleUpdatedCartInState, currentBill }) => {
  return (
    <PageWrapper
      data={data}
      cart={cart}
      currentBill={currentBill}
      handleUpdatedCartInState={(updatedCart) =>
        handleUpdatedCartInState(updatedCart)
      }
    >
      {!data.store.hero ? null : (
        <div
          className="hero_"
          style={{
            backgroundImage: `url(${data.store.hero})`,
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}
      <Products
        products={data.products}
        cart={cart}
        currentBill={currentBill}
        handleUpdatedCartInState={(updatedCart) =>
          handleUpdatedCartInState(updatedCart)
        }
      />
    </PageWrapper>
  );
};

Index.propTypes = {
  data: PropTypes.shape({
    products: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
    store: PropTypes.shape({
      hero: PropTypes.string,
    }),
  }),
  cart: PropTypes.shape({}),
  handleUpdatedCartInState: PropTypes.func.isRequired,
  currentBill: PropTypes.number,
};

Index.defaultProps = {
  cart: {},
  data: {
    store: {
      hero: null,
    },
  },
  currentBill: 0,
};

export default Index;

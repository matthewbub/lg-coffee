import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../prebuilts/Navigation';
import Footer from '../prebuilts/Footer';

const PageWrapper = ({
  children,
  data,
  cart,
  handleUpdatedCartInState,
  currentBill,
}) => (
  <div className="content">
    <Navigation
      data={data}
      cart={cart}
      currentBill={currentBill}
      handleUpdatedCartInState={(updatedCart) =>
        handleUpdatedCartInState(updatedCart)
      }
    />
    <main>{children}</main>
    <Footer data={data} />
  </div>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  cart: PropTypes.shape({}),
  data: PropTypes.shape({
    store: PropTypes.shape({}).isRequired,
  }).isRequired,
  handleUpdatedCartInState: PropTypes.func.isRequired,
  currentBill: PropTypes.number,
};

PageWrapper.defaultProps = {
  cart: {},
  currentBill: 0,
};

export default PageWrapper;

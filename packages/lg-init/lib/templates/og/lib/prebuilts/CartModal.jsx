import Router from 'next/router';
import React from 'react';
import PropTypes from 'prop-types';
import { calc } from 'lg-calc';
import CheckoutForm from '../forms/billing/CheckoutForm';
import CheckoutPreview from './CheckoutPreview';
import { handleSuccessfulCheckout } from '../handlers/handleSuccessfulCheckout';

const CartModal = ({
  cart,
  handleClose,
  handleEmptyCartNotice,
  handleUpdatedCartInState,
}) => (
  <div className="d-flex flex-column align-items-center">
    <div style={{ maxWidth: '80%' }}>
      <div className="d-flex flex-column">
        <button
          type="button"
          onClick={handleClose}
          className="align-self-end mt-4 btn btn-outline-dark"
          style={{
            border: 'none',
            background: 'none',
            fontSize: '16px',
          }}
        >
          Go Back
        </button>
      </div>

      <CheckoutPreview
        cart={cart}
        handleEmptyCartNotice={handleEmptyCartNotice}
        handleUpdatedCartInState={(updatedCart) =>
          handleUpdatedCartInState(updatedCart)
        }
      />

      <CheckoutForm
        cart={cart}
        price={calc(cart)}
        onSuccessfulCheckout={() => {
          handleSuccessfulCheckout(cart);
          Router.push('/checkout/order-confirmation');
        }}
      />
    </div>
  </div>
);

CartModal.propTypes = {
  cart: PropTypes.shape({}),
  handleClose: PropTypes.func.isRequired,
  handleEmptyCartNotice: PropTypes.func.isRequired,
  handleUpdatedCartInState: PropTypes.func.isRequired,
};

CartModal.defaultProps = {
  cart: {},
};

export default CartModal;

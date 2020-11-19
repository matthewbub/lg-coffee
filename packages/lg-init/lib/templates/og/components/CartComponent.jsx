import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { calc } from 'lg-calc';
import Modal from 'react-bootstrap/Modal';
import CheckoutForm from './CheckoutForm';
import CheckoutPreview from './CheckoutPreview';

const handleSuccessfulCheckout = (cart) => {
  localStorage.removeItem('cart');
  localStorage.setItem('order-confirmation', JSON.stringify(cart));
};

const CartIcon = ({ handleShow }) => (
  <button
    type="button"
    onClick={handleShow}
    style={{
      background: 'none',
      border: '0',
    }}
  >
    <img
      src="/cart.png"
      alt="Checkout"
      style={{
        height: '20px',
        cursor: 'pointer',
      }}
    />
  </button>
);

CartIcon.propTypes = {
  handleShow: PropTypes.func.isRequired,
};

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

const CartComponent = ({ cart, handleUpdatedCartInState }) => {
  const [isCartEmpty, setCartToEmpty] = useState(true);

  // modal funcs
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    cart ? setCartToEmpty(false) : setCartToEmpty(true);
  }, [cart]);

  const handleEmptyCartNotice = () => setCartToEmpty(true);

  return (
    <>
      <CartIcon handleShow={handleShow} />

      <Modal show={show} onHide={handleClose}>
        {isCartEmpty ? (
          <h2 className="m-4">Nothing in cart</h2>
        ) : (
          <CartModal
            cart={cart}
            handleClose={handleClose}
            handleEmptyCartNotice={handleEmptyCartNotice}
            handleUpdatedCartInState={(updatedCart) =>
              handleUpdatedCartInState(updatedCart)
            }
          />
        )}
      </Modal>
    </>
  );
};

CartComponent.propTypes = {
  cart: PropTypes.shape({}),
  data: PropTypes.shape({}).isRequired,
  handleUpdatedCartInState: PropTypes.func.isRequired,
};

CartComponent.defaultProps = {
  cart: {},
};

export default CartComponent;

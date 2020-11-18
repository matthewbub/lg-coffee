/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { calc } from 'lg-calc';
import Modal from 'react-bootstrap/Modal';
import CheckoutForm from './CheckoutForm';
import CheckoutPreview from './CheckoutPreview';

const CartComponent = ({ cart }) => {
  const [isCartEmpty, setCartToEmpty] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    cart ? setCartToEmpty(false) : setCartToEmpty(true);
  }, [cart]);

  return (
    <>
      <div variant="primary" onClick={handleShow}>
        <img
          src="/cart.png"
          alt="Checkout"
          style={{
            height: '20px',
            cursor: 'pointer',
          }}
        />
      </div>

      <Modal show={show} onHide={handleClose}>
        {isCartEmpty ? (
          <h2 className="m-4">Nothing in cart</h2>
        ) : (
          <div className="d-flex flex-column align-items-center">
            <div>
              <div className="d-flex flex-column">
                <button
                  type="button"
                  onClick={handleClose}
                  className="align-self-end mt-4 mr-4 btn btn-outline-dark"
                  style={{
                    border: 'none',
                    background: 'none',
                    fontSize: '16px',
                    fontFamily: 'Montserrat',
                  }}
                >
                  Go Back
                </button>
              </div>
              <CheckoutPreview cart={cart} />
              <CheckoutForm
                cart={cart}
                price={calc(cart)}
                onSuccessfulCheckout={() =>
                  Router.push('/checkout/order-confirmation')
                }
              />
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

CartComponent.propTypes = {
  // eslint-disable-next-line react/require-default-props
  cart: PropTypes.shape({}),
  data: PropTypes.shape({}).isRequired,
};

export default CartComponent;

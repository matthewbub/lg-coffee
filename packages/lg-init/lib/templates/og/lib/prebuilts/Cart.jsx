import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import CartPlaceholder from '../components/CartPlaceholder';
import CartModal from './CartModal';

const Cart = ({ cart, handleUpdatedCartInState, currentBill }) => {
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
      <CartPlaceholder handleShow={handleShow} isCartEmpty={isCartEmpty} />

      <Modal show={show} onHide={handleClose}>
        {isCartEmpty ? (
          <h2 className="m-4">Nothing in cart</h2>
        ) : (
          <CartModal
            cart={cart}
            currentBill={currentBill}
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

Cart.propTypes = {
  cart: PropTypes.shape({}),
  data: PropTypes.shape({}).isRequired,
  handleUpdatedCartInState: PropTypes.func.isRequired,
  currentBill: PropTypes.number,
};

Cart.defaultProps = {
  cart: {},
  currentBill: 0,
};

export default Cart;

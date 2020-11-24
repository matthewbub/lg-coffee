import React from 'react';
import PropTypes from 'prop-types';

const CartPlaceholder = ({ handleShow, isCartEmpty }) => (
  <button
    type="button"
    onClick={handleShow}
    style={{
      background: 'none',
      border: '0',
    }}
  >
    {isCartEmpty ? null : (
      <div
        className="bg-warning scale-in-center"
        style={{
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          position: 'absolute',
          top: '28px',
          right: '14px',
        }}
      />
    )}
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

CartPlaceholder.propTypes = {
  handleShow: PropTypes.func.isRequired,
  isCartEmpty: PropTypes.bool.isRequired,
};

export default CartPlaceholder;

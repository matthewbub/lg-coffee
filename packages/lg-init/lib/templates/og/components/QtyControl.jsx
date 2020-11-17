/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';

const QtyControl = ({ product, cart }) => {
  const [count, setCount] = useState(1);
  const [alert, setAlert] = useState(null);

  const handleCount = (operator) => {
    if (count === 0) return;
    if (operator === '+') setCount(count + 1);
    else if (operator === '-') setCount(count - 1);
    else {
      setAlert({
        status: 'danger',
        message: 'Unknown error occured. Try again later.',
      });
    }
  };

  const handleSubmit = () => {
    if (count === 0)
      setAlert({ status: 'warning', message: 'Nothing to add!' });
    else {
      let updatedCart;
      if (cart) {
        updatedCart = JSON.stringify({
          ...cart,
          [product.sku]: {
            ...product,
            qty: count,
            totalOfSku: product.price * count,
          },
        });
      } else {
        updatedCart = JSON.stringify({
          [product.sku]: {
            ...product,
            qty: count,
            totalOfSku: product.price * count,
          },
        });
      }

      localStorage.setItem('cart', updatedCart);

      setAlert({
        status: 'success',
        message:
          count === 1
            ? `added ${count} product to your cart!`
            : `added ${count} products to your cart!`,
      });
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }
  };

  return (
    <div className="d-flex justify-content-end">
      <div
        style={{
          height: '100px',
          position: 'absolute',
          zIndex: '2000',
          left: '1em',
          bottom: '-1em',
        }}
      >
        {alert ? <Alert status={alert.status}>{alert.message}</Alert> : null}
      </div>

      <div className="d-flex flex-column align-items-end mb-3">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-outline-dark p-1 pr-3 pl-3"
            style={{ height: 'fit-content' }}
            onClick={() => handleCount('-')}
          >
            -
          </button>
          <p className="d-flex pr-3 pl-3" style={{ height: 'fit-content' }}>
            {count}
          </p>
          <button
            type="button"
            className="btn btn-outline-dark p-1 pr-3 pl-3"
            style={{ height: 'fit-content' }}
            onClick={() => handleCount('+')}
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="btn btn-outline-dark qty_submit"
          onClick={handleSubmit}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

QtyControl.propTypes = {
  product: PropTypes.shape({
    sku: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/require-default-props
  cart: PropTypes.shape({}),
};

export default QtyControl;

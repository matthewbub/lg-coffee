/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Alert from './Alert';

const QtyControl = ({ sku }) => {
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
    if (count === 0) setAlert({ status: 'warning', message: 'Nothing to add!' });
    else {
      axios
        .post('/cart', {
          sku,
          qty: count,
        })
        .then((res) => {
          console.log('res', res.data);

          setAlert({
            status: 'success',
            message: 'Successfully added products to cart!',
          });
          setTimeout(() => {
            setAlert(null);
          }, 3000);
        })
        .catch((err) => {
          console.log('error in request', err);
          setAlert({
            status: 'warning',
            message: 'Sorry, Something went wrong.',
          });
          setTimeout(() => {
            setAlert(null);
          }, 3000);
        });
    }
  };

  return (
    <div className="d-flex flex-column align-items-end">
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
      <div style={{ height: '100px' }}>
        {alert ? <Alert message={alert.message} status={alert.status} /> : null}
      </div>
    </div>
  );
};

QtyControl.propTypes = {
  sku: PropTypes.string.isRequired,
};

export default QtyControl;

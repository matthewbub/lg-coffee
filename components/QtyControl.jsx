import React, { useState } from 'react';
import Alert from './Alert';

const QtyControl = (props) => {
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
      setAlert({
        status: 'success',
        message: 'Successfully added products to cart!',
      });
      setTimeout(() => {
        setAlert(null);
      }, 3000);
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
        {alert ? <Alert status={alert} /> : null}
      </div>
    </div>
  );
};

export default QtyControl;

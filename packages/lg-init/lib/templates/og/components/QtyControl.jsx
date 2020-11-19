/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Alert from './Alert';
import { H5 } from './_helpers';

const QtyControl = ({ product, cart, handleUpdatedCartInState }) => {  
  const [alert, setAlert] = useState(null);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    let updatedCart;

    if (cart) {
      updatedCart = JSON.stringify({
        ...cart,
        [product.sku]: {
          ...product,
          qty: ev.target.qty.value,
        },
      });
    } else {
      // if cart empty, set cart
      updatedCart = JSON.stringify({
        [product.sku]: {
          ...product,
          qty: ev.target.qty.value,
        },
      });
    }

    localStorage.setItem('cart', updatedCart);
    handleUpdatedCartInState(updatedCart)
    setAlert({
      status: 'success',
      message:
        ev.target.qty.value === 1
          ? `added ${ev.target.qty.value} product to your cart!`
          : `added ${ev.target.qty.value} products to your cart!`,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  
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
        <Form className="d-flex align-items-center" onSubmit={handleSubmit}>
          <H5 className="p-0 m-0">QTY:</H5>  
          <Form.Control 
            type="number" 
            label="qty"
            min="1" 
            max="40" 
            name="qty"
            defaultValue="1"
            className="border-dark mx-3"
            style={{
              width: 'fit-content'
            }}
          /> 
          <button
            type="submit"
            className="btn btn-outline-dark qty_submit"
            style={{width: '125px !important'}}
          >
            Add To Cart
          </button>
        </Form>
      </div>
    </div>
  );
};

QtyControl.propTypes = {
  product: PropTypes.shape({
    sku: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  cart: PropTypes.shape({}),
  handleUpdatedCartInState: PropTypes.func.isRequired,
};


QtyControl.defaultProps = {
  cart: {},
}

export default QtyControl;

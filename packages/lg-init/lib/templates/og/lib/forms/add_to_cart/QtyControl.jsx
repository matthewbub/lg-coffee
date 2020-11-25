import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Alert from '../../components/Alert';

const QtyControl = ({
  product,
  cart,
  handleUpdatedCartInState,
  currentBill,
}) => {
  const [alert, setAlert] = useState(null);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    let updatedCart;
    let billing;
    const due = product.metadata.price * ev.target.qty.value;

    if (cart) {
      const newBilling = currentBill + due;

      updatedCart = JSON.stringify({
        ...cart,
        [product.id]: {
          ...product,
          price: product.metadata.price,
          qty: ev.target.qty.value,
        },
      });

      billing = JSON.stringify(newBilling);
    } else {
      // if cart empty, set cart
      updatedCart = JSON.stringify({
        [product.id]: {
          ...product,
          price: product.metadata.price,
          qty: ev.target.qty.value,
        },
      });

      billing = JSON.stringify(due);
    }

    localStorage.setItem('cart', updatedCart);
    localStorage.setItem('billing', billing);

    handleUpdatedCartInState(updatedCart, billing);

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
          <h5 className="p-0 m-0">QTY:</h5>
          <Form.Control
            type="number"
            label="qty"
            min="1"
            max="40"
            name="qty"
            defaultValue="1"
            className="border-dark mx-3"
            style={{
              width: 'fit-content',
            }}
          />
          <button
            type="submit"
            className="btn btn-outline-dark qty_submit"
            style={{ width: '125px !important' }}
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
    id: PropTypes.string.isRequired,
    metadata: PropTypes.shape({
      price: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  cart: PropTypes.shape({}),
  handleUpdatedCartInState: PropTypes.func.isRequired,
  currentBill: PropTypes.number,
};

QtyControl.defaultProps = {
  cart: {},
  currentBill: 0,
};

export default QtyControl;

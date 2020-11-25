import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { formatUSD } from '../../utils/formatUSD';

const CheckoutPreview = ({
  cart,
  handleEmptyCartNotice,
  handleUpdatedCartInState,
}) => {
  const [cartInStorage, setCartInStorage] = useState(cart);

  const handleRemoveFromCart = (id) => {
    const updatedCart = cartInStorage;

    delete updatedCart[id];

    setCartInStorage(updatedCart);

    if (Object.keys(updatedCart).length === 0) {
      localStorage.removeItem('cart');
      return handleEmptyCartNotice();
      // eslint-disable-next-line no-else-return
    } else {
      // func requires JSON
      handleUpdatedCartInState(JSON.stringify(updatedCart));
      return localStorage.setItem('cart', JSON.stringify(cartInStorage));
    }
  };

  console.log(cart);
  return (
    <Container>
      <Row className="d-flex align-items-center">
        <h3 className="ellipse pb-5">In Cart</h3>
      </Row>

      {Object.keys(cart).map((i) => (
        <Row key={cart[i].id} className="d-flex align-items-center rounded">
          <Col xs={2}>
            <img
              src={cart[i].images[0]}
              alt={cart[i].name}
              style={{ height: '75px', width: '75px' }}
            />
          </Col>

          <Col xs={10} className="d-flex flex-column">
            <Row className="align-self-end mr-2">
              <h4 style={{ width: '100%', margin: '0' }} className="ellipse">
                {cart[i].name}
              </h4>
            </Row>

            <Row className="align-self-end align-items-end mr-2">
              <p className="mt-2" style={{ margin: '0', padding: '0' }}>
                ${formatUSD(cart[i].price)} USD
              </p>
              <p className="ml-4 mr-2" style={{ margin: '0', padding: '0' }}>
                Qty: {cart[i].qty}
              </p>
              <button
                type="button"
                style={{
                  border: 'none',
                  background: 'none',
                  margin: '0',
                  padding: '0',
                }}
                className="btn btn-outline-danger font-weight-bolder ml-4"
                onClick={() => {
                  handleRemoveFromCart(i);
                }}
              >
                X
              </button>
            </Row>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

CheckoutPreview.propTypes = {
  cart: PropTypes.shape({
    images: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    qty: PropTypes.string,
  }),
  handleEmptyCartNotice: PropTypes.func.isRequired,
  handleUpdatedCartInState: PropTypes.func.isRequired,
};

CheckoutPreview.defaultProps = {
  cart: {
    images: '',
    name: '',
    price: '',
    qty: '',
  },
};

export default CheckoutPreview;

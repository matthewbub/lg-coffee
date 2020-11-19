import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { formatUSD } from '../utils/formatUSD';
import { H2, H3, H4 } from './_helpers';

const CheckoutPreview = ({ cart, handleEmptyCartNotice }) => {
  const [cartInStorage, setCartInStorage] = useState(cart);  
  const [cartIsEmpty, setCartToEmpty] = useState();

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    cartInStorage ? setCartToEmpty(false) : setCartToEmpty(true);
  }, [cartInStorage]);

  const handleRemoveFromCart = (id) => {
    const updatedCart = cartInStorage;

    delete updatedCart[id];

    setCartInStorage(updatedCart);

    if (Object.keys(updatedCart).length === 0) {
      localStorage.removeItem('cart');
      handleEmptyCartNotice();
      return setCartToEmpty(true);
    // eslint-disable-next-line no-else-return
    } else {
      return localStorage.setItem('cart', JSON.stringify(cartInStorage))
    };
  };

  return (
    <Container>
      <Row className="d-flex align-items-center">
        <H3 className="ellipse pb-5 pl-5">In Cart</H3>
      </Row>

      {Object.keys(cart).map((i) => (
        <Row
          key={cart[i].sku}
          className="d-flex align-items-center rounded px-5"
        >
          <Col xs={4}>
            <img
              src={cart[i].images[0]}
              alt={cart[i].name}
              style={{ height: '100px', width: '100px' }}
            />
          </Col>
          <Col xs={8} className="d-flex flex-column">
            <Row className="align-self-end mr-2">
              <H4
                style={{ width: '100%', margin: '0' }}
                className="ellipse"
              >
                {cart[i].name}
              </H4>
            </Row>
            <Row className="align-self-end align-items-end mr-2">
              <p className="mt-2" style={{ margin: '0', padding: '0' }}>
                ${formatUSD(cart[i].price)} USD
              </p>
              <p
                className="ml-4 mr-2"
                style={{ margin: '0', padding: '0' }}
              >
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
};

CheckoutPreview.defaultProps = {
  cart : {
    images: '',
    name: '',
    price: '',
    qty: '',
  }
}

export default CheckoutPreview;

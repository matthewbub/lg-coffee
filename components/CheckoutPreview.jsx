import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loading from './Loading';

const CheckoutPreview = ({ cart }) => {
  if (!cart) <Loading data={cart} />;

  const [currentCart, setCurrentCart] = useState(cart);
  const [isCartEmpty, setCartToEmpty] = useState();

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    currentCart ? setCartToEmpty(false) : setCartToEmpty(true);
  }, [currentCart]);

  const handleRemoveFromCart = (id) => {
    const updatedCart = currentCart;

    delete updatedCart[id];

    setCurrentCart(updatedCart);

    if (Object.keys(updatedCart).length === 0) {
      sessionStorage.removeItem('cart');
      setCartToEmpty(true);
    } else sessionStorage.setItem('cart', JSON.stringify(currentCart));
  };

  return (
    <>
      <Container fluid>
        {currentCart === undefined || currentCart === null || isCartEmpty ? (
          <h2 className="text-light">No Products</h2>
        ) : (
          <>
            <Row>
              <h1 className="text-light mt-5 mb-4">Checkout</h1>
            </Row>
            <Row className="d-flex align-items-center border-light">
              <Col xs={8}>
                <h2 style={{ width: '100%' }} className="text-light ellipse">
                  Product
                </h2>
              </Col>
              <Col xs={3}>
                <h2 className="text-light">Price</h2>
              </Col>
              <Col xs={1}>
                <h2 className="text-light">Qty</h2>
              </Col>
            </Row>

            {Object.keys(currentCart).map((i) => (
              <Row
                key={currentCart[i].productSku}
                className="d-flex align-items-center border-light"
              >
                <Col xs={3}>
                  <img
                    src={currentCart[i].productImages[0]}
                    alt={currentCart[i].productTitle}
                    style={{ height: '100px', width: '100px' }}
                  />
                </Col>
                <Col xs={5}>
                  <h4
                    style={{ width: '100%', margin: '0' }}
                    className="text-light ellipse"
                  >
                    {currentCart[i].productTitle}
                  </h4>
                </Col>
                <Col xs={3}>
                  <p className="text-light" style={{ margin: '0' }}>
                    {currentCart[i].productPrice}
                  </p>
                </Col>
                <Col
                  xs={1}
                  className="d-flex align-items-center justify-content-between"
                >
                  <p className="text-light" style={{ margin: '0' }}>
                    {currentCart[i].qty}
                  </p>
                  <button
                    type="button"
                    style={{
                      border: 'none',
                      background: 'none',
                      margin: '0',
                      padding: '0',
                    }}
                    className="btn btn-outline-light font-weight-bolder ml-4"
                    onClick={() => {
                      handleRemoveFromCart(i);
                    }}
                  >
                    X
                  </button>
                </Col>
              </Row>
            ))}
          </>
        )}
      </Container>
    </>
  );
};

CheckoutPreview.propTypes = {
  cart: PropTypes.shape({
    productImages: PropTypes.string.isRequired,
    productTitle: PropTypes.string.isRequired,
    productPrice: PropTypes.string.isRequired,
    qty: PropTypes.string.isRequired,
  }).isRequired,
};

export default CheckoutPreview;

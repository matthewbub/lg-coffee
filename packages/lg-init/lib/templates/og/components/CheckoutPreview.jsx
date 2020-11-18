import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loading from './Loading';
import { formatUSD } from '../utils/formatUSD';
import { H2, H3, H4 } from './_helpers';

const CheckoutPreview = ({ cart }) => {
  if (!cart) <Loading data={cart} />;

  const [cartInStorage, setCartInStorage] = useState(cart);
  const [isCartEmpty, setCartToEmpty] = useState();

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
      setCartToEmpty(true);
    } else localStorage.setItem('cart', JSON.stringify(cartInStorage));
  };

  return (
    <>
      <Container>
        {cartInStorage === undefined ||
        cartInStorage === null ||
        isCartEmpty ? (
          <H2 className="m-4">No Products</H2>
        ) : (
          <>
            <Row className="d-flex align-items-center">
              <H3 className="ellipse pb-5 pl-5">In Cart</H3>
            </Row>

            {Object.keys(cartInStorage).map((i) => (
              <Row
                key={cartInStorage[i].sku}
                className="d-flex align-items-center rounded px-5"
              >
                <Col xs={4}>
                  <img
                    src={cartInStorage[i].images[0]}
                    alt={cartInStorage[i].name}
                    style={{ height: '100px', width: '100px' }}
                  />
                </Col>
                <Col xs={8} className="d-flex flex-column">
                  <Row className="align-self-end mr-2">
                    <H4
                      style={{ width: '100%', margin: '0' }}
                      className="ellipse"
                    >
                      {cartInStorage[i].name}
                    </H4>
                  </Row>
                  <Row className="align-self-end align-items-end mr-2">
                    <p className="mt-2" style={{ margin: '0', padding: '0' }}>
                      ${formatUSD(cartInStorage[i].price)} USD
                    </p>
                    <p
                      className="ml-4 mr-2"
                      style={{ margin: '0', padding: '0' }}
                    >
                      Qty: {cartInStorage[i].qty}
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
          </>
        )}
      </Container>
    </>
  );
};

CheckoutPreview.propTypes = {
  // eslint-disable-next-line react/require-default-props
  cart: PropTypes.shape({
    images: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    qty: PropTypes.string,
  }),
};

export default CheckoutPreview;

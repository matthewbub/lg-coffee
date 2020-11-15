import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loading from './Loading';

const handleUSDChange = (number) => {
  const string = JSON.stringify(number);
  const { length } = string;
  return JSON.parse(
    `${string.substring(0, length - 2)}.${string.substring(length - 2)}`,
  );
};

const CheckoutPreview = ({ cart }) => {
  if (!cart) <Loading data={cart} />;

  const [cartInStorage, setCartInStorage] = useState(cart);
  const [isCartEmpty, setCartToEmpty] = useState();

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    cartInStorage ? setCartToEmpty(false) : setCartToEmpty(true);
  }, [cartInStorage]);

  // const [total, setTotal] = useState([]);

  // const handleTotal = () => {
  //   for (let i = 0; i < Object.keys(cartInStorage).length; i + 1) {
  //     setTotal([...total, ])
  //     priceRack.push = cartInStorage[i].price * cartInStorage[i].qty;
  //   }
  
  // }

  // const priceRack = [];
  // let total;

  
  // total = priceRack.reduce((x, y) => x + y, 0);

  const handleRemoveFromCart = (id) => {
    const updatedCart = cartInStorage;

    delete updatedCart[id];

    setCartInStorage(updatedCart);

    if (Object.keys(updatedCart).length === 0) {
      sessionStorage.removeItem('cart');
      setCartToEmpty(true);
    } else sessionStorage.setItem('cart', JSON.stringify(cartInStorage));
  };

  return (
    <>
      <Container fluid>
        {cartInStorage === undefined || cartInStorage === null || isCartEmpty ? (
          <h2 className="text-light">No Products</h2>
        ) : (
          <>
            <Row>
              <h1 className="text-light mt-5 mb-4">Checkout</h1>
            </Row>
            <Row className="d-flex align-items-center border-light">
              <h2 className="text-light ellipse">
                Products
              </h2>
            </Row>

            {Object.keys(cartInStorage).map((i) => (
              <a href={cartInStorage[i].sku} style={{ textDecoration: 'none' }} key={cartInStorage[i].sku}>
                <Row                  
                  className="d-flex align-items-center rounded bg-dark"
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
                      <h4
                        style={{ width: '100%', margin: '0' }}
                        className="text-light ellipse"
                      >
                        {cartInStorage[i].name}
                      </h4>
                    </Row>
                    <Row className="align-self-end align-items-end mr-2">
                      <p className="text-light mt-2" style={{ margin: '0', padding: '0' }}>
                        $
                        {handleUSDChange(cartInStorage[i].price)}
                        {' '}
                        USD
                      </p>
                      <p className="text-light ml-4 mr-2" style={{ margin: '0', padding: '0' }}>
                        Qty:
                        {' '}
                        {cartInStorage[i].qty}
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
                    </Row>
                  </Col>
                </Row>
              </a>
            ))}
            <Row>
              <Col>
                {/* <h3 className="text-light">{handleUSDChange(price.reduce((x, y) => x + y, 0) )}</h3> */}
              </Col>
            </Row>
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

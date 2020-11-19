import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartComponent from '../components/CartComponent';

const Navigation = ({ cart, data, handleUpdatedCartInState }) => (
  <div
    className="d-flex justify-content-between w-100 fixed-top"
    style={{ background: '#FFFFFF !important' }}
  >
    <Navbar
      expand="lg"
      style={{ backgroundColor: '#FFFFFF !important' }}
      fixed="top"
      className="justify-content-between fixed-top"
    >
      {(
        <img
          src={data.store.logo}
          height="75"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      ) || <Navbar.Brand href="/">{data.store.name}</Navbar.Brand>}
      <Nav>
        <CartComponent
          cart={cart}
          data={data}
          handleUpdatedCartInState={(updatedCart) =>
            handleUpdatedCartInState(updatedCart)
          }
        />
      </Nav>
    </Navbar>
  </div>
);

Navigation.propTypes = {
  data: PropTypes.shape({
    store: PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  cart: PropTypes.shape({}),
  handleUpdatedCartInState: PropTypes.func.isRequired,
};

Navigation.defaultProps = {
  cart: {},
};

export default Navigation;

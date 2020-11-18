import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartComponent from '../components/CartComponent';

const Navigation = ({ cart, data }) => (
  <Navbar
    bg="light"
    expand="lg"
    sticky="top"
    className="justify-content-between"
  >
    <Navbar.Brand href="/">{data.store.name}</Navbar.Brand>
    <Nav>
      <CartComponent cart={cart} data={data} />
    </Nav>
  </Navbar>
);

Navigation.propTypes = {
  data: PropTypes.shape({
    store: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  cart: PropTypes.shape({}).isRequired,
};

export default Navigation;

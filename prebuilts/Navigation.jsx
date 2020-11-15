import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = ({ store }) => (
  <Navbar bg="light" expand="lg" sticky="top" className="justify-content-between">
    <Navbar.Brand href="/">{store.name}</Navbar.Brand>
    <Nav>
      <Nav.Link href="/checkout">
        <img
          src="/cart.png"
          alt="Checkout"
          style={{
              height: '15px',
              cursor: 'pointer',
            }}
        />
      </Nav.Link>
    </Nav>
  </Navbar>
);

Navigation.propTypes = {
  store: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Navigation;

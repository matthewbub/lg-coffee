import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const StickyTopNavbar = ({ store, navigation }) => (
  <Navbar bg="light" expand="lg" sticky="top">
    <Navbar.Brand href="/">{store.storeName}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {navigation.map((i) => (
          <Nav.Link href={i.path} key={i.title}>
            {i.title}
          </Nav.Link>
        ))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

StickyTopNavbar.propTypes = {
  store: PropTypes.shape({
    storeName: PropTypes.string.isRequired,
  }).isRequired,
  navigation: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default StickyTopNavbar;

import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = ({ logo, navigation }) => (
  <Navbar
    collapseOnSelect
    expand="lg"
    bg="dark"
    variant="dark"
    style={{ backgroundColor: '#0c0b07 !important' }}
    sticky="top"
  >
    <Navbar.Brand href="/">
      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        {navigation.map((i) => (
          <Nav.Link href={i.href}>{i.name}</Nav.Link>
        ))}
      </Nav>
      <Nav>
        <Nav.Link href="/view-cart/checkout">Cart</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Navigation.propTypes = {
  logo: PropTypes.string.isRequired,
  navigation: PropTypes.arrayOf().isRequired,
};

export default Navigation;

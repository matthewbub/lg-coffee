import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SlimWrapper from './SlimWrapper';

const date = new Date();
const year = date.getFullYear();

const Footer = ({ contact }) => (
  <footer>
    <Container className="my-5">
      <SlimWrapper>
        <Link href={`mailto:${contact}`}>
          <h5 className="text-light m-2" style={{ cursor: 'pointer' }}>
            Contact
          </h5>
        </Link>
      </SlimWrapper>
      <Row>
        <Col className="d-flex justify-content-center">
          <span className="text-light m-2" style={{ fontSize: '12px' }}>
            {year}
          </span>
        </Col>
      </Row>
    </Container>
  </footer>
);

Footer.propTypes = {
  contact: PropTypes.string.isRequired,
};

export default Footer;

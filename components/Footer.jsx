import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const date = new Date();
const year = date.getFullYear();

const Footer = ({ links }) => (
  <footer>
    <Container fluid className="my-5">
      <Row>
        <Col className="d-flex justify-content-center">
          {links.map((i) => (
            <Link href={i.path} key={i.title}>
              <span className="text-light m-2" style={{ cursor: 'pointer' }}>
                {i.title}
              </span>
            </Link>
          ))}
        </Col>
      </Row>
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
  links: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default Footer;

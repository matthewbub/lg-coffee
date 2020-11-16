import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SlimWrapper = ({ children }) => (
  <Row className="my-5 align-items-center justify-content-center">
    <Col lg={8} md={9} sm={12}>
      {children}
    </Col>
  </Row>
);

SlimWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SlimWrapper;

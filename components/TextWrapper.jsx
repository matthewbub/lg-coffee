import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TextWrapper = ({ children }) => (
  <Row>
    <Col
      lg={{ span: 6, offset: 3 }}
      md={{ span: 8, offset: 2 }}
      sm={{ span: 10, offset: 1 }}
      xs={12}
    >
      {children}
    </Col>
  </Row>
);

TextWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextWrapper;

import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SlimWrapper = ({ children }) => (
  <Row>
    <Col
      lg={{ span: 4, offset: 4 }}
      md={{ span: 6, offset: 3 }}
      sm={{ span: 8, offset: 2 }}
      xs={{ span: 10, offset: 1 }}
    >
      {children}
    </Col>
  </Row>
);

SlimWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SlimWrapper;

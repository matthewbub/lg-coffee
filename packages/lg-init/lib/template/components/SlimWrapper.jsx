import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import clsx from 'clsx';

const SlimWrapper = ({ children, className }) => (
  <Row className={clsx('align-items-center justify-content-center', className)}>
    <Col lg={8} md={9} sm={12}>
      {children}
    </Col>
  </Row>
);

SlimWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
};

export default SlimWrapper;

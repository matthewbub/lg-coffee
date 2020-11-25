import React from 'react';
import PropTypes from 'prop-types';

const CheckoutError = ({ children }) => <>{children}</>;

CheckoutError.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CheckoutError;

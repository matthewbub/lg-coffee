import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ status, children }) => (
  <div style={{ height: '100px', width: '300px' }} className="mt-2">
    {status ? (
      <div className={`alert alert-${status}`} role="alert">
        {children}
      </div>
    ) : null}
  </div>
);

Alert.propTypes = {
  status: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Alert;

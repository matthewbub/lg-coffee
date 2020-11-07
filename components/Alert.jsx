import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ status, message }) => (
  <div style={{ height: '100px', width: '300px' }} className="mt-2">
    {status ? (
      <div className={`alert alert-${status}`} role="alert">
        {message}
      </div>
    ) : null}
  </div>
);

Alert.propTypes = {
  status: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Alert;

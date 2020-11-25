import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Pill = ({ title, className, handleShow }) => (
  <button
    id={title}
    type="button"
    onClick={handleShow}
    style={{ width: '200px', border: '0', padding: '0' }}
    className={clsx('btn btn-outline-dark mt-2 pl-1 text-left', className)}
  >
    {title}
  </button>
);

Pill.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleShow: PropTypes.func.isRequired,
};

export default Pill;

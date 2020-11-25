import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Wrap = ({ children, className }) => (
  <div className={clsx(className, 'd-flex flex-wrap')}>{children}</div>
);

Wrap.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Wrap.defaultProps = {
  className: '',
};

export default Wrap;

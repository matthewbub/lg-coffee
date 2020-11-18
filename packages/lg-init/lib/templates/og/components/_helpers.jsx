import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const H1 = ({ children, className, theme }) => (
  <h1 className={clsx(className, theme)}>{children}</h1>
);

H1.propTypes = {
  children: PropTypes.node.isRequired,
  // applies to general styles
  className: PropTypes.string.isRequired,
  // applies to color
  theme: PropTypes.string.isRequired,
};

const H2 = ({ children, className, theme }) => (
  <h2 className={clsx(className, theme)}>{children}</h2>
);

H2.propTypes = {
  children: PropTypes.node.isRequired,
  // applies to general styles
  className: PropTypes.string.isRequired,
  // applies to color
  theme: PropTypes.string.isRequired,
};

const H3 = ({ children, className, theme }) => (
  <h3 className={clsx(className, theme)}>{children}</h3>
);

H3.propTypes = {
  children: PropTypes.node.isRequired,
  // applies to general styles
  className: PropTypes.string.isRequired,
  // applies to color
  theme: PropTypes.string.isRequired,
};

const H4 = ({ children, className, theme }) => (
  <h4 className={clsx(className, theme)}>{children}</h4>
);

H4.propTypes = {
  children: PropTypes.node.isRequired,
  // applies to general styles
  className: PropTypes.string.isRequired,
  // applies to color
  theme: PropTypes.string.isRequired,
};

const H5 = ({ children, className, theme }) => (
  <h5 className={clsx(className, theme)}>{children}</h5>
);

H5.propTypes = {
  children: PropTypes.node.isRequired,
  // applies to general styles
  className: PropTypes.string.isRequired,
  // applies to color
  theme: PropTypes.string.isRequired,
};

const H6 = ({ children, className, theme }) => (
  <h6 className={clsx(className, theme)}>{children}</h6>
);

H6.propTypes = {
  children: PropTypes.node.isRequired,
  // applies to general styles
  className: PropTypes.string.isRequired,
  // applies to color
  theme: PropTypes.string.isRequired,
};

export { H1, H2, H3, H4, H5, H6 };

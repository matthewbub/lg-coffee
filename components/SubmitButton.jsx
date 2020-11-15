import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const SubmitButton = ({ title, className }) => (
  <button className={clsx(className, 'btn')} type="submit">
    {title}
  </button>
);

SubmitButton.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default SubmitButton;

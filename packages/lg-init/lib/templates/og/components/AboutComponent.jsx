/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { H4, P } from './_helpers';

const AboutComponent = ({ store, theme }) => (
  <div className="p-4">
    <H4 theme={theme}>About Us</H4>
    <P theme={theme}>{store.about || 'Coming Soon'}</P>
  </div>
);

AboutComponent.propTypes = {
  store: PropTypes.shape({
    about: PropTypes.string,
  }),
  theme: PropTypes.shape({}),
};

export default AboutComponent;
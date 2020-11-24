/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { H4, P } from './_helpers';

const AboutComponent = ({ store }) => (
  <>
    <H4>About Us</H4>
    <P>{store.about || 'Coming Soon'}</P>
  </>
);

AboutComponent.propTypes = {
  store: PropTypes.shape({
    about: PropTypes.string,
  }),
};

export default AboutComponent;

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PropTypes from 'prop-types';

const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

const StripeWrapper = ({ children }) => (
  <Elements stripe={stripePromise}>{children}</Elements>
);

StripeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StripeWrapper;

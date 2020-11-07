/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.css';
import '../styles/custom.css';
import '../styles/animations.css';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Head from 'next/head';

import PropTypes from 'prop-types';

const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

const StripeWrapper = ({ children }) => (
  <Elements stripe={stripePromise}>{children}</Elements>
);

StripeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState();

  const url = '/api/data';
  const options = { method: 'GET' };

  fetch(url, options)
    .then((response) => response.json())
    .then((responseJson) => {
      setData(responseJson);
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.error(error));

  if (data) {
    return (
      <StripeWrapper>
        <Head>
          <title>{data.StoreName}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@400;700&display=swap" />
        </Head>
        <Component data={data} {...pageProps} />
      </StripeWrapper>
    );
  }
  return <>loading</>;
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default MyApp;
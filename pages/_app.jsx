/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import useSwr from 'swr';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Head from 'next/head';

import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.css';
import '../styles/custom.css';
import '../styles/animations.css';

const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

const StripeWrapper = ({ children }) => (
  <Elements stripe={stripePromise}>{children}</Elements>
);

StripeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const fetcher = (url) => fetch(url).then((res) => res.json());

function MyApp({ Component, pageProps }) {
  const { data, error } = useSwr('/api/data', fetcher);

  if (error) return <div>Something went wrong</div>;
  if (!data) {
    return (
      <StripeWrapper>
        <div
          style={{ height: '80vh' }}
          className="w-100 d-flex justify-content-center align-items-center"
        >
          <Loading data={data} />
        </div>
      </StripeWrapper>
    );
  }
  return (
    <StripeWrapper>
      <Head>
        <title>{data.StoreName}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@400;700&display=swap" />
      </Head>
      <Component data={data} {...pageProps} />
    </StripeWrapper>
  );
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default MyApp;

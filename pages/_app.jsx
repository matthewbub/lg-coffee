/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import FacebookPixelWrapper from '../components/FacebookPixelWrapper';
import NextSEOWrapper from '../components/NextSEOWrapper';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>lg-coffee</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@400;700&display=swap" />
      </Head>
      <FacebookPixelWrapper>
        <NextSEOWrapper
          name="lg-coffee"
          description="bootstrap an eCommerce application using Next.js and Stripe"
          url="/"
        />
        <Component {...pageProps} />
      </FacebookPixelWrapper>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;

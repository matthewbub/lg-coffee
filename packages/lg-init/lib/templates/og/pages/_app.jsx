/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import useSwr from 'swr';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import StripeWrapper from '../components/StripeWrapper';
import FacebookPixelWrapper from '../components/FacebookPixelWrapper';
import NextSEOWrapper from '../components/NextSEOWrapper';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.css';
import '../styles/helpers.css';
import '../styles/ProductPreview.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

function App({ Component, pageProps }) {
  const { data, error } = useSwr('/api/data', fetcher);

  const [cart, addProductToCart] = useState({});

  useEffect(() => {
    const userCart = localStorage.getItem('cart');
    addProductToCart(JSON.parse(userCart));
  }, []);

  if (error) return <div>Something went wrong</div>;
  if (!data) {
    return (
      <StripeWrapper>
        <Loading data={data} />
      </StripeWrapper>
    );
  }
  return (
    <StripeWrapper>
      <Head>
        <title>{data.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />        
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@400;700&display=swap" />
      </Head>
      <FacebookPixelWrapper>
        <NextSEOWrapper
          name={data.name}
          description={data.description}
          url={data.url}
        />
        <Component data={data} cart={cart} {...pageProps} />
      </FacebookPixelWrapper>
    </StripeWrapper>
  );
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;

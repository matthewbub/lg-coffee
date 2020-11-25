/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import useSwr from 'swr';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Loading from '../lib/components/Loading';
import StripeWrapper from '../lib/wrappers/StripeWrapper';
import FacebookPixelWrapper from '../lib/wrappers/FacebookPixelWrapper';
import NextSEOWrapper from '../lib/wrappers/NextSEOWrapper';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.css';
import '../styles/ProductPreview.css';
import '../styles/animations.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

function App({ Component, pageProps }) {
  // grabs data
  const { data, error } = useSwr('/api/data', fetcher);

  const [cart, setCart] = useState({});
  const [currentBill, setBilling] = useState();

  // handles cart on event
  const handleUpdatedCartInState = (updatedCart) =>
    setCart(JSON.parse(updatedCart));

  useEffect(() => {
    // handles cart on page refresh
    const userCart = localStorage.getItem('cart');
    setCart(JSON.parse(userCart));

    // handles billing
    const billingFromStorage = localStorage.getItem('billing');
    setBilling(JSON.parse(billingFromStorage));
  }, []);

  // page failed to load
  if (error)
    return (
      <div
        style={{
          backgroundImage: `url('/404.jpeg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
    );

  // if data is pending return loading
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
        <title>{data.store.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@400;700&display=swap" />
      </Head>
      <FacebookPixelWrapper>
        <NextSEOWrapper
          name={data.store.name}
          description={data.store.description}
          url={data.store.url}
        />
        <Component
          data={data}
          cart={cart}
          currentBill={currentBill}
          handleUpdatedCartInState={(updatedCart) =>
            handleUpdatedCartInState(updatedCart)
          }
          {...pageProps}
        />
      </FacebookPixelWrapper>
    </StripeWrapper>
  );
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;

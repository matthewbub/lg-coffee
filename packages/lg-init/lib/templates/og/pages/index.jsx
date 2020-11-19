/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../components/PageWrapper';
import ProductRowComponet from '../prebuilts/ProductRowComponent';
import Loading from '../components/Loading';

const HomePage = ({ data, cart }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!data && !cart) setLoading(true);
    else setLoading(false);
  }, [data, cart]);

  return (
    <>
      {loading ? (
        <Loading data={data} />
      ) : (
        <PageWrapper data={data} cart={cart}>
          <ProductRowComponet
            heading={data.products.heading}
            products={data.products.products}
            cart={cart}
          />
        </PageWrapper>
      )}
    </>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    products: PropTypes.shape({
      heading: PropTypes.string,
      products: PropTypes.arrayOf(),
    }),
  }),
  cart: PropTypes.shape({}),
};

export default HomePage;

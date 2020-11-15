import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getFixedPrice from 'lg-calc';
import Loading from '../../components/Loading';
import PageWrapper from '../../components/PageWrapper';
import SlimWrapper from '../../components/SlimWrapper';
import CheckoutForm from '../../components/CheckoutForm';
import CheckoutPreview from '../../components/CheckoutPreview';

const Checkout = ({ data, cart }) => {
  if (!cart || !data) <Loading data={cart} />;
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(getFixedPrice({ cart }));
  }, [cart]);

  return (
    <PageWrapper data={data}>
      <SlimWrapper>
        <CheckoutPreview cart={cart} />
        <CheckoutForm
          cart={cart}
          price={total}
          onSuccessfulCheckout={() => Router.push('/checkout/order-confirmation')}
        />
      </SlimWrapper>
    </PageWrapper>
  );
};

Checkout.propTypes = {
  // eslint-disable-next-line react/require-default-props
  cart: PropTypes.shape({}),
  data: PropTypes.shape({}).isRequired,
};

export default Checkout;

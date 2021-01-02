import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { calc } from 'lg-calc';
import Loading from '../../lib/components/Loading';
import PageWrapper from '../../lib/wrappers/PageWrapper';
import SlimWrapper from '../../lib/wrappers/SlimWrapper';
import CheckoutForm from '../../lib/forms/billing/CheckoutForm';
import CheckoutPreview from '../../lib/prebuilts/CheckoutPreview';

const Checkout = ({ data, cart }) => {
  if (!cart || !data) <Loading data={cart} />;
  const [total, setTotal] = useState({});

  useEffect(() => {
    setTotal(cart);
  }, [cart]);

  return (
    <PageWrapper data={data}>
      <SlimWrapper>
        <CheckoutPreview cart={cart} />
        <CheckoutForm
          cart={cart}
          price={calc(total)}
          onSuccessfulCheckout={() =>
            Router.push('/checkout/order-confirmation')
          }
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

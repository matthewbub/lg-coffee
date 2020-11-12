import Router from 'next/router';
import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../../components/Loading';
import PageWrapper from '../../components/PageWrapper';
import SlimWrapper from '../../components/SlimWrapper';
import CheckoutForm from '../../components/CheckoutForm';
import CheckoutPreview from '../../components/CheckoutPreview';

const Checkout = ({ data, cart }) => {
  if (!cart || !data) <Loading data={cart} />;
  return (
    <PageWrapper data={data}>
      <SlimWrapper>
        <CheckoutPreview cart={cart} />
        <CheckoutForm
          price={287}
          onSuccessfulCheckout={() => Router.push('/checkout/order-confirmation')}
        />
      </SlimWrapper>
    </PageWrapper>
  );
};

Checkout.propTypes = {
  cart: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({
    products: PropTypes.arrayOf({}).isRequired,
  }).isRequired,
};

export default Checkout;

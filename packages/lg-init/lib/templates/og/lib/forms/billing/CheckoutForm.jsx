import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import BillingDetailsFields from './BillingDetailsFields';
import SubmitButton from '../../components/SubmitButton';
import CheckoutError from '../../components/CheckoutError';
import { formatUSD } from '../../../utils/formatUSD';

const CheckoutForm = ({ price, onSuccessfulCheckout }) => {
  const [isProcessing, setProcessingTo] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [checkoutError, setCheckoutError] = useState();
  const [total, setTotal] = useState();
  const [USD, setUSD] = useState();

  useEffect(() => {
    setTotal(price);
    if (total > 0) {
      setUSD(formatUSD(total));
    }
  }, [price, total]);
  const stripe = useStripe();
  const elements = useElements();

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();

    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      address: {
        city: ev.target.city.value,
        line1: ev.target.address.value,
        state: ev.target.state.value,
        postal_code: ev.target.zip.value,
      },
    };

    setProcessingTo(true);

    // create payment intent
    const { data: clientSecret } = await axios.post('/api/payment_intents', {
      amount: price,
    });

    const cardElement = elements.getElement(CardElement);

    const paymentMethodReq = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: billingDetails,
    });

    // eslint-disable-next-line no-unused-vars
    const confirmCardPayment = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethodReq.paymentMethod.id,
    });

    onSuccessfulCheckout();
  };

  const cardElementOptions = {
    style: {
      base: {
        iconColor: '#000000',
        color: '#212529',
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {
          color: '#000000',
        },
        '::placeholder': {
          color: '#6B757E',
        },
      },
      invalid: {
        iconColor: '#FFC7EE',
        color: '#FFC7EE',
      },
    },
  };

  return (
    <Form onSubmit={handleFormSubmit} className="d-flex flex-column mb-4">
      <BillingDetailsFields />

      <div
        className="py-2"
        style={{
          backgroundColor: 'none !important',
          border: '0',
        }}
      >
        <CardElement options={cardElementOptions} />
      </div>

      {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}

      <SubmitButton
        disabled={isProcessing}
        title={isProcessing ? 'Processing...' : `Pay $${USD} USD`}
        className="my-4 btn-outline-dark align-self-end"
      />
    </Form>
  );
};

CheckoutForm.propTypes = {
  price: PropTypes.number.isRequired,
  onSuccessfulCheckout: PropTypes.func.isRequired,
  cart: PropTypes.shape({}),
};

CheckoutForm.defaultProps = {
  cart: {},
};

export default CheckoutForm;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import BillingDetailsFields from './BillingDetailsFields';
import SubmitButton from './SubmitButton';
import CheckoutError from './CheckoutError';

const handleUSDChange = (number) => {
  const string = JSON.stringify(number);
  const { length } = string;
  return JSON.parse(
    `${string.substring(0, length - 2)}.${string.substring(length - 2)}`,
  );
};

const CheckoutForm = ({ price, onSuccessfulCheckout }) => {
  const [isProcessing, setProcessingTo] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [checkoutError, setCheckoutError] = useState();
  // eslint-disable-next-line no-unused-vars
  const [total, setTotal] = useState();
  const [USD, setUSD] = useState();

  useEffect(() => {
    setTotal(price);
    if (total > 0) {
      setUSD(handleUSDChange(total));
    }
  }, [price, total]);

  console.log(USD);

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
        iconColor: '#c4f0ff',
        color: '#fff',
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {
          color: '#fce883',
        },
        '::placeholder': {
          color: '#87BBFD',
        },
      },
      invalid: {
        iconColor: '#FFC7EE',
        color: '#FFC7EE',
      },
    },
  };
  return (
    <Form onSubmit={handleFormSubmit}>
      <BillingDetailsFields />
      <div
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
        title={isProcessing ? 'Processing...' : `Pay $${USD || price} USD`}
        className="mt-4 btn-outline-light"
      />
    </Form>
  );
};

CheckoutForm.propTypes = {
  price: PropTypes.number.isRequired,
  onSuccessfulCheckout: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  cart: PropTypes.shape({}),
};

export default CheckoutForm;

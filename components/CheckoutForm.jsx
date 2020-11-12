import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import BillingDetailsFields from './BillingDetailsFields';
import SubmitButton from './SubmitButton';
import CheckoutError from './CheckoutError';

const CheckoutForm = ({ price, onSuccessfulCheckout }) => {
  const [isProcessing, setProcessingTo] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [checkoutError, setCheckoutError] = useState();

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
      amount: price * 100,
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
        fontSize: '16px',
        color: 'rgb(250,250,250)',
        '::placeholder': {
          color: '#87BBFD',
        },
      },
      invalid: {
        color: '#FFC7EE',
        iconColor: '#FFC7EE',
      },
      complete: {},
    },
    hidePostalCode: true,
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <BillingDetailsFields />
      <div className="StripeElement">
        <CardElement options={cardElementOptions} />
      </div>

      {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}

      <SubmitButton disabled={isProcessing}>
        {isProcessing ? 'Processing...' : `Pay $${price}`}
      </SubmitButton>
    </Form>
  );
};

CheckoutForm.propTypes = {
  price: PropTypes.number.isRequired,
  onSuccessfulCheckout: PropTypes.shape({}).isRequired,
};

export default CheckoutForm;

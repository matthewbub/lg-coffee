/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Loading from '../../components/Loading';
import PageWrapper from '../../components/PageWrapper';

const CheckoutError = ({ children }) => <>{children}</>;

CheckoutError.propTypes = {
  children: PropTypes.node.isRequired,
};

const BillingDetailsFields = () => (
  <>
    <Form.Row>
      <h1 className="text-light mt-5">Billing Information</h1>
      <Form.Control
        className="bg-dark text-light mt-3"
        type="text"
        label="name"
        name="name"
        placeholder="Jane Doe"
        required
      />

      <Form.Control
        className="bg-dark text-light mt-3"
        type="text"
        label="email"
        name="email"
        placeholder="jane.doe@example.com"
        required
      />

      <Form.Control
        className="bg-dark text-light mt-3"
        type="text"
        label="address"
        name="address"
        placeholder="185 Berry St. Suite 550"
        required
      />

      <Form.Control
        className="bg-dark text-light mt-3"
        type="text"
        label="city"
        name="city"
        placeholder="San Francisco"
        required
      />

      <Form.Control
        className="bg-dark text-light mt-3"
        type="text"
        label="state"
        name="state"
        placeholder="CA"
        required
      />

      <Form.Control
        className="bg-dark text-light my-3"
        type="text"
        label="zip"
        name="zip"
        placeholder="94103"
        required
      />
    </Form.Row>
  </>
);

const SubmitButton = () => (
  <Button className="btn btn-outline-light align-self-end mt-3" type="submit">
    Submit
  </Button>
);

const CheckoutForm = ({ price, onSuccessfulCheckout }) => {
  const [isProcessing, setProcessingTo] = useState(false);
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

    const confirmCardPayment = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethodReq.paymentMethod.id,
    });

    // console.log(confirmCardPayment);

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
    <Container>
      <Row className="d-flex justify-content-center">
        <Col md={6}>
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
        </Col>
      </Row>
    </Container>
  );
};

CheckoutForm.propTypes = {
  price: PropTypes.number.isRequired,
  onSuccessfulCheckout: PropTypes.shape({}).isRequired,
};

const CheckoutPreview = ({ cart }) => (
  <div>
    {Object.keys(cart).map((i) => (
      <Row className="d-flex justify-content-center">
        <Col md={6}>
          {console.log(cart[i])}
          <div className="d-flex">
            <img
              src={cart[i].productImages[0]}
              alt={cart[i].productTitle}
              style={{ height: '150px', width: '150px' }}
            />
            <h2 className="text-light">{cart[i].productTitle}</h2>
            <p className="text-light">{cart[i].productPrice}</p>
            <p className="text-light">{cart[i].qty}</p>
          </div>
        </Col>
      </Row>
    ))}
  </div>
);

CheckoutPreview.propTypes = {
  cart: PropTypes.shape({
    productImages: PropTypes.string.isRequired,
    productTitle: PropTypes.string.isRequired,
    productPrice: PropTypes.string.isRequired,
    qty: PropTypes.string.isRequired,
  }).isRequired,
};

const Checkout = ({ data, cart }) => {
  if (!cart || !data) {
    <div
      style={{ height: '80vh' }}
      className="w-100 d-flex justify-content-center align-items-center"
    >
      <Loading data={cart} />
    </div>;
  }
  return (
    <PageWrapper data={data}>
      <CheckoutPreview cart={cart} />
      <CheckoutForm
        price={287}
        onSuccessfulCheckout={() => Router.push('/checkout/order-confirmation')}
      />
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

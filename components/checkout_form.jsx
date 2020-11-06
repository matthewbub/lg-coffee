import { useState } from "react";
import axios from "axios";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutError = ({ children }) => <>{children}</>;

const BillingDetailsFields = (props) => {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        label="name"
        name="name"
        placeholder="Jane Doe"
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        label="email"
        name="email"
        placeholder="jane.doe@example.com"
        required
      />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        label="address"
        name="address"
        placeholder="185 Berry St. Suite 550"
        required
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        label="city"
        name="city"
        placeholder="San Francisco"
        required
      />
      <label htmlFor="state">State</label>
      <input type="text" label="state" name="state" placeholder="CA" required />
      <label htmlFor="zip">ZIP</label>
      <input type="text" label="zip" name="zip" placeholder="94103" required />
    </div>
  );
};

const SubmitButton = (props) => {
  return (
    <button
      style={{
        backgroundColor: `${(props) =>
          props.disabled ? "#7795f8" : "#f6a4eb"}`,
        boxShadow: `${(props) =>
          props.disabled
            ? "none"
            : "0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08), inset 0 1px 0 #ffb9f6;"}`,
        opacity: `${(props) => (props.disabled ? 0.5 : 1)}`,
      }}
    >
      Submit
    </button>
  );
};

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
    const { data: clientSecret } = await axios.post("/api/payment_intents", {
      amount: price * 100,
    });

    const cardElement = elements.getElement(CardElement);

    const paymentMethodReq = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: billingDetails,
    });

    const confirmCardPayment = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethodReq.paymentMethod.id,
    });

    console.log(confirmCardPayment);

    onSuccessfulCheckout();
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#fff",
        "::placeholder": {
          color: "#87BBFD",
        },
      },
      invalid: {
        color: "#FFC7EE",
        iconColor: "#FFC7EE",
      },
      complete: {},
    },
    hidePostalCode: true,
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="container">
        <BillingDetailsFields />
        <div className="StripeElement">
          <CardElement options={cardElementOptions} />
        </div>

        {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}

        <SubmitButton disabled={isProcessing}>
          {isProcessing ? "Processing..." : `Pay $${price}`}
        </SubmitButton>
      </div>
    </form>
  );
};

export default CheckoutForm;

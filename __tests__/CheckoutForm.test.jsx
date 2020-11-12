import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'next/router';
import renderer from 'react-test-renderer';
import StripeWrapper from '../components/StripeWrapper';
import CheckoutForm from '../components/CheckoutForm';

it('CheckoutForm component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <StripeWrapper>
      <CheckoutForm price={123} onSuccessfulCheckout={() => Router.push('/checkout/order-confirmation')} />
    </StripeWrapper>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('CheckoutForm component renders unchanged', () => {
  const tree = renderer.create(
    <StripeWrapper>
      <CheckoutForm price={123} onSuccessfulCheckout={() => Router.push('/checkout/order-confirmation')} />
    </StripeWrapper>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

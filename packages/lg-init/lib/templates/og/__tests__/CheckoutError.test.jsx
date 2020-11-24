import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CheckoutError from '../lib/components/CheckoutError';

it('CheckoutError component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CheckoutError>Hello</CheckoutError>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('CheckoutError component renders unchanged', () => {
  const tree = renderer.create(<CheckoutError>Hello</CheckoutError>).toJSON();
  expect(tree).toMatchSnapshot();
});

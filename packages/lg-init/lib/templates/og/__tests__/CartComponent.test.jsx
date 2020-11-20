import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CartComponent from '../components/CartComponent';

const product = {
  name: 'product',
  description: 'this is an awesome product you should buy 2',
  price: '$2.87',
  sku: 'abc_123',
  images: [
    '/path_01.png',
    '/path_02.png',
    '/path_03.png',
  ],
  qty: 12,
};

const handleUpdatedCartInState = () => {};

it('CheckoutError component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CartComponent 
      cart={{product}} 
      handleUpdatedCartInState={handleUpdatedCartInState} 
    />
  , div);
  ReactDOM.unmountComponentAtNode(div);
});

it('CheckoutError component renders unchanged', () => {
  const tree = renderer.create(
    <CartComponent 
      cart={{product}} 
      handleUpdatedCartInState={handleUpdatedCartInState} 
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

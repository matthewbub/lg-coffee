import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import QtyControl from '../lib/forms/add_to_cart/QtyControl';

const id = 'demo_sku';

const product = {
  name: 'product',
  description: 'this is an awesome product you should buy 2',
  price: 287,
  id: 'abc_123',
  images: [
    '/path_01.png',
    '/path_02.png',
    '/path_03.png',
  ],
  qty: 12,
};

const handleUpdatedCartInState = () => {};

it('QtyControl component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <QtyControl 
      id={id}
      product={product}             
      handleUpdatedCartInState={handleUpdatedCartInState}    
    />
  , div);
  ReactDOM.unmountComponentAtNode(div);
});

it('QtyControl component renders unchanged', () => {
  const tree = renderer.create(
    <QtyControl 
      id={id} 
      product={product}             
      handleUpdatedCartInState={handleUpdatedCartInState}    
    />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});

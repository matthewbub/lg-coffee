import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CheckoutPreview from '../lib/prebuilts/CheckoutPreview';

const cart = {
  one: {
    product: {
      name: 'Strawberry Bone',
      description: 'Super colorful, your dog will love this!',
      id: 'srw_bn_',
      images: ['/pink.png'],
    },
    qty: 2,
    price: 197,    
  }
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const fn = () => {};

it('CheckoutPreview component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CheckoutPreview 
      cart={cart}  
      handleEmptyCartNotice={fn}
      handleUpdatedCartInState={fn}
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('CheckoutPreview component renders unchanged', () => {
  const tree = renderer.create(
    <CheckoutPreview 
      cart={cart}  
      handleEmptyCartNotice={fn}
      handleUpdatedCartInState={fn}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

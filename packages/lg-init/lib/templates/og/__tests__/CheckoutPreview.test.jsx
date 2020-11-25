import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CheckoutPreview from '../lib/prebuilts/CheckoutPreview';

const cart = {
  one: {
    name: 'Strawberry Bone',
    description: 'Super colorful, your dog will love this!',
    price: 197,
    id: 'srw_bn_',
    images: ['/pink.png'],
  
  }
};

const handleEmptyCartNotice = () => {}
const handleUpdatedCartInState = () => {}

it('CheckoutPreview component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CheckoutPreview 
      cart={cart}  
      handleEmptyCartNotice={handleEmptyCartNotice}
      handleUpdatedCartInState={handleUpdatedCartInState}
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('CheckoutPreview component renders unchanged', () => {
  const tree = renderer.create(
    <CheckoutPreview 
      cart={cart}  
      handleEmptyCartNotice={handleEmptyCartNotice}
      handleUpdatedCartInState={handleUpdatedCartInState}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

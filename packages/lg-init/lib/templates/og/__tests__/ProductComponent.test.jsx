import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ProductComponent from '../components/ProductComponent';
import { data } from '../utils/data';
// product, cart, handleUpdatedCartInState

const handleUpdatedCartInState = () => {};

it('ProductComponent components renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ProductComponent 
      product={data.products.products[0]} 
      cart={data.products} 
      handleUpdatedCartInState={handleUpdatedCartInState}
    />
  , div);
  ReactDOM.unmountComponentAtNode(div);
});

it('ProductComponent component renders unchanged', () => {
  const tree = renderer.create(
    <ProductComponent 
      product={data.products.products[0]} 
      cart={data.products} 
      handleUpdatedCartInState={handleUpdatedCartInState}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

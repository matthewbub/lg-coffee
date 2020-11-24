import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Product from '../lib/prebuilts/Product';
import { testData } from '../utils/testData';

const handleUpdatedCartInState = () => {};

it('Product components renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Product
      product={testData.products[0]} 
      cart={testData.products} 
      handleUpdatedCartInState={handleUpdatedCartInState}
    />
  , div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Product component renders unchanged', () => {
  const tree = renderer.create(
    <Product
      product={testData.products[0]} 
      cart={testData.products} 
      handleUpdatedCartInState={handleUpdatedCartInState}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

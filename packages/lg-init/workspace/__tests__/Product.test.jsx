/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Product from '../lib/prebuilts/Product';
import { testCart } from '../utils/testData';

const handleUpdatedCartInState = () => {};

it('Product components renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Product
      product={{
        id: 'prod_IRbpyL6fgse3n',
        object: 'product',
        active: true,
        attributes: [],
        created: 1606151601,
        description: 'demo product description',
        images: ['img.jpg'],
        livemode: false,        
        name: 'Large Demo Product',
        statement_descriptor: null,
        type: 'service',
        unit_label: null,
        updated: 1606153202,
      }} 
      price={234} 
      cart={testCart} 
      handleUpdatedCartInState={handleUpdatedCartInState}
    />
    , div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Product component renders unchanged', () => {
  const tree = renderer.create(
    <Product
      product={{
        id: 'prod_IRbpyL6fgse3n',
        object: 'product',
        active: true,
        attributes: [],
        created: 1606151601,
        description: 'demo product description',
        images: ['img.jpg'],
        livemode: false,        
        name: 'Large Demo Product',
        statement_descriptor: null,
        type: 'service',
        unit_label: null,
        updated: 1606153202,
      }} 
      price={234}
      cart={testCart} 
      handleUpdatedCartInState={handleUpdatedCartInState}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

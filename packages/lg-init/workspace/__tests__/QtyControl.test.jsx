/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import QtyControl from '../lib/forms/add_to_cart/QtyControl';

it('QtyControl component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <QtyControl 
      id='abc'
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
      price={287}
      handleUpdatedCartInState={() => {}}
    />
    , div);
  ReactDOM.unmountComponentAtNode(div);
});

it('QtyControl component renders unchanged', () => {
  const tree = renderer.create(
    <QtyControl 
      id='abc'
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
      price={287}
      handleUpdatedCartInState={() => {}}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import QtyControl from '../lib/forms/add_to_cart/QtyControl';
import { testData } from '../utils/testData'

it('QtyControl component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <QtyControl 
      id='abc'
      product={testData.products[0]}
      handleUpdatedCartInState={() => {}}
    />
  , div);
  ReactDOM.unmountComponentAtNode(div);
});

it('QtyControl component renders unchanged', () => {
  const tree = renderer.create(
    <QtyControl 
      id='abc'
      product={testData.products[0]}
      handleUpdatedCartInState={() => {}}
    />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});

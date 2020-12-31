import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import BillingDetailsFields from '../lib/forms/billing/BillingDetailsFields';

it('BillingDetailsFields component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BillingDetailsFields />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('BillingDetailsFields component renders unchanged', () => {
  const tree = renderer.create(<BillingDetailsFields />).toJSON();
  expect(tree).toMatchSnapshot();
});

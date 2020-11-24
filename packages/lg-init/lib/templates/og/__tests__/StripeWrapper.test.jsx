import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StripeWrapper from '../lib/wrappers/StripeWrapper';

it('StripeWrapper component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StripeWrapper>Hello, World!</StripeWrapper>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('StripeWrapper component renders unchanged', () => {
  const tree = renderer.create(<StripeWrapper>Hello, World!</StripeWrapper>).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import QtyControl from '../components/QtyControl';

const sku = 'demo_sku';

it('QtyControl component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QtyControl sku={sku} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('QtyControl component renders unchanged', () => {
  const tree = renderer.create(<QtyControl sku={sku} />).toJSON();
  expect(tree).toMatchSnapshot();
});

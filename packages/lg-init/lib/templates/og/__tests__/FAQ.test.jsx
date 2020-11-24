import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import FAQ from '../lib/static/FAQ.mdx';

it('FAQComponent components renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FAQ/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('FAQComponent component renders unchanged', () => {
  const tree = renderer.create(<FAQ/>).toJSON();
  expect(tree).toMatchSnapshot();
});

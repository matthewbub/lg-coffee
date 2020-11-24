import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Footer from '../lib/prebuilts/Footer';
import { testData } from '../utils/testData';

it('Footer component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer data={testData}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Footer component renders unchanged', () => {
  const tree = renderer.create(<Footer data={testData} />).toJSON();
  expect(tree).toMatchSnapshot();
});

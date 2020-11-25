import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Loading from '../lib/components/Loading';
import { testData } from '../utils/testData';

it('Loading components renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loading data={testData} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Loading component renders unchanged', () => {
  const tree = renderer.create(<Loading data={testData} />).toJSON();
  expect(tree).toMatchSnapshot();
});

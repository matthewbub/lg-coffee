import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Contact from '../lib/forms/contact/Contact';
import { testData } from '../utils/testData';

it('Contact renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Contact store={testData}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Contact renders unchanged', () => {
  const tree = renderer.create(<Contact store={testData}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

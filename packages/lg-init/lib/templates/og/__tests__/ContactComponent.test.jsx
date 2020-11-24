import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Contact from '../components/ContactComponent';
import { testData } from '../utils/testData';

it('Contact components renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Contact store={testData}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Contact component renders unchanged', () => {
  const tree = renderer.create(<Contact store={testData}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

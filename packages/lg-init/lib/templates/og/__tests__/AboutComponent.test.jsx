import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import AboutComponent from '../components/AboutComponent';
import { testData } from '../utils/testData';

it('AboutComponent component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutComponent store={testData.store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('AboutComponent component renders unchanged', () => {
  const tree = renderer.create(<AboutComponent store={testData.store} />).toJSON();
  expect(tree).toMatchSnapshot();
});
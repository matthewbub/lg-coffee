import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import About from '../pages/info/about';

// needs to fetch data first
// import { data } from '../utils/data';

it('renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders homepage unchanged', () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
});

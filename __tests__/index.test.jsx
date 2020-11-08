import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Index from '../pages/index';

// needs to fetch data first
import { data } from '../utils/data';

it('renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Index data={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders homepage unchanged', () => {
  const tree = renderer.create(<Index data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});

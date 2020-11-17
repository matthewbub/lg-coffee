import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Loading from '../components/Loading';
import { data } from '../utils/data';

it('Loading components renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loading data={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Loading component renders unchanged', () => {
  const tree = renderer.create(<Loading data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});

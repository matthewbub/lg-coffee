import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Footer from '../components/Footer';
import { data } from '../utils/data';

it('Footer component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer data={data}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Footer component renders unchanged', () => {
  const tree = renderer.create(<Footer data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Footer from '../components/Footer';
import { data } from '../utils/data';

const links = data.footer;

it('Footer component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer links={links} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Footer component renders unchanged', () => {
  const tree = renderer.create(<Footer links={links} />).toJSON();
  expect(tree).toMatchSnapshot();
});

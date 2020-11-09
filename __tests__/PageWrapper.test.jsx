import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import PageWrapper from '../components/PageWrapper';
import { data } from '../utils/data';

it('PageWrapper renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageWrapper data={data}><p>Hello World</p></PageWrapper>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('PageWrapper renders unchanged', () => {
  const tree = renderer.create(<PageWrapper data={data}><p>Hello World</p></PageWrapper>).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import FAQComponent from '../components/FAQComponent';
import { data } from '../utils/data';

it('FAQComponent components renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FAQComponent store={data.store} theme={data.theme} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('FAQComponent component renders unchanged', () => {
  const tree = renderer.create(<FAQComponent store={data.store} theme={data.theme} />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StickyTopNavbar from '../components/StickyTopNavbar';
import { data } from '../utils/data';

const { store, navigation } = data;

it('StickyTopNavbar component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StickyTopNavbar store={store} navigation={navigation} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('StickyTopNavbar component renders unchanged', () => {
  const tree = renderer.create(<StickyTopNavbar store={store} navigation={navigation} />).toJSON();
  expect(tree).toMatchSnapshot();
});

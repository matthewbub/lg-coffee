import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Navigation from '../prebuilts/Navigation';
import { data } from '../utils/data';

const { store, navigation } = data;

it('Navigation component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navigation store={store} navigation={navigation} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('StickyTopNavbar component renders unchanged', () => {
  const tree = renderer.create(<Navigation store={store} navigation={navigation} />).toJSON();
  expect(tree).toMatchSnapshot();
});

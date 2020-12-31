import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SlimWrapper from '../lib/wrappers/SlimWrapper';

it('SlimWrapper component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SlimWrapper>Hello, World!</SlimWrapper>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('SlimWrapper component renders unchanged', () => {
  const tree = renderer.create(<SlimWrapper>Hello, World!</SlimWrapper>).toJSON();
  expect(tree).toMatchSnapshot();
});

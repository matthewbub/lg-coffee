import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TextWrapper from '../components/TextWrapper';

it('TextWrapper component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextWrapper><h1>Hello World</h1></TextWrapper>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('TextWrapper component renders unchanged', () => {
  const tree = renderer.create(<TextWrapper><h1>Hello World</h1></TextWrapper>).toJSON();
  expect(tree).toMatchSnapshot();
});

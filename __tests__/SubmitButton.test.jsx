import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SubmitButton from '../components/SubmitButton';

it('SubmitButton component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SubmitButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('SubmitButton component renders unchanged', () => {
  const tree = renderer.create(<SubmitButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

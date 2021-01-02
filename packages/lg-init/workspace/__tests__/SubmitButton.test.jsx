import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SubmitButton from '../lib/components/SubmitButton';

it('SubmitButton component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SubmitButton className="cn" title="submit" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('SubmitButton component renders unchanged', () => {
  const tree = renderer.create(<SubmitButton className="cn" title="submit" />).toJSON();
  expect(tree).toMatchSnapshot();
});

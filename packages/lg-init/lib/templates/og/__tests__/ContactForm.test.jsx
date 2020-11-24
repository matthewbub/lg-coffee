import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ContactForm from '../lib/forms/contact/ContactForm';

it('Contact components renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactForm/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Contact component renders unchanged', () => {
  const tree = renderer.create(<ContactForm/>).toJSON();
  expect(tree).toMatchSnapshot();
});

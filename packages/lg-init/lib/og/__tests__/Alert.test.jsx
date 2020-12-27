import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Alert from '../lib/components/Alert';

const alert = {
  status: 'danger',
  message: 'Unknown error occured. Try again later.',
};

it('Alert component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Alert status={alert.status}>{alert.message}</Alert>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Alert component renders unchanged', () => {
const tree = renderer.create(<Alert status={alert.status}>{alert.message}</Alert>).toJSON();
  expect(tree).toMatchSnapshot();
});

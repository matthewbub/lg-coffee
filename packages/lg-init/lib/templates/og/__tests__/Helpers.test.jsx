import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { H1, H2, H3, H4, H5, H6, P } from '../components/_helpers';


it('H1 component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<H1>Hello World</H1>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('H1 component renders unchanged', () => {
  const tree = renderer.create(<H1>Hello World</H1>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('H2 component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<H2>Hello World</H2>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('H2 component renders unchanged', () => {
  const tree = renderer.create(<H2>Hello World</H2>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('H3 component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<H3>Hello World</H3>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('H3 component renders unchanged', () => {
  const tree = renderer.create(<H3>Hello World</H3>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('H4 component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<H4>Hello World</H4>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('H4 component renders unchanged', () => {
  const tree = renderer.create(<H4>Hello World</H4>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('H5 component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<H5>Hello World</H5>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('H5 component renders unchanged', () => {
  const tree = renderer.create(<H5>Hello World</H5>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('H6 component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<H6>Hello World</H6>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('H6 component renders unchanged', () => {
  const tree = renderer.create(<H6>Hello World</H6>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('P component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<P>Hello World</P>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('P component renders unchanged', () => {
  const tree = renderer.create(<P>Hello World</P>).toJSON();
  expect(tree).toMatchSnapshot();
});

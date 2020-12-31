import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import PageWrapper from '../lib/wrappers/PageWrapper';
import { testData } from '../utils/testData';

const handleEmptyCartNotice = () => {}
const handleUpdatedCartInState = () => {}

it('PageWrapper renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <PageWrapper 
      data={testData}
      handleEmptyCartNotice={handleEmptyCartNotice}
      handleUpdatedCartInState={handleUpdatedCartInState}
    >
      <p>Hello World</p>
    </PageWrapper>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('PageWrapper renders unchanged', () => {
  const tree = renderer.create(
    <PageWrapper 
      data={testData}
      handleEmptyCartNotice={handleEmptyCartNotice}
      handleUpdatedCartInState={handleUpdatedCartInState}
    >
      <p>Hello World</p>
    </PageWrapper>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});

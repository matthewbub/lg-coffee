import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../pages/index';

// needs to fetch data first
import { data } from '../utils/data';

it('renders homepage unchanged', () => {
  const tree = renderer.create(<Index data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});

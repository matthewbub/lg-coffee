import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ProductPreview from '../components/ProductPreview';

const product = {
    productTitle: 'product',
    productDescription: 'this is an awesome product you should buy 2',
    productPrice: '$2.87',
    productSku: 'abc_123',
    productImages: [
      '/path_01.png',
      '/path_02.png',
      '/path_03.png',
    ],
    qty: 12,
};

it('ProductPreview component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductPreview product={product} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('ProductPreview component renders unchanged', () => {
  const tree = renderer.create(<ProductPreview product={product} />).toJSON();
  expect(tree).toMatchSnapshot();
});

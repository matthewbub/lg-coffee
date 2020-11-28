import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import SlimWrapper from '../wrappers/SlimWrapper';
import Product from './Product';

const Products = ({
  products,
  cart,
  handleUpdatedCartInState,
  currentBill,
}) => (
  <Container>
    <SlimWrapper>
      <h2 className="mb-4">Products</h2>
    </SlimWrapper>
    {Object.keys(products).map((i) => (
      <Product
        key={products[i].product.id}
        cart={cart}
        product={products[i].product}
        price={products[i].price.unit_amount}
        currentBill={currentBill}
        handleUpdatedCartInState={(updatedCart) =>
          handleUpdatedCartInState(updatedCart)
        }
      />
    ))}
  </Container>
);

Products.propTypes = {
  products: PropTypes.shape({}).isRequired,
  cart: PropTypes.shape({}),
  handleUpdatedCartInState: PropTypes.func.isRequired,
  currentBill: PropTypes.number,
};

Products.defaultProps = {
  cart: {},
  currentBill: 0,
};

export default Products;

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
      <h2 className="my-5">Products</h2>
    </SlimWrapper>

    {products.map((i) => (
      <Product
        key={i.id}
        cart={cart}
        product={i}
        currentBill={currentBill}
        handleUpdatedCartInState={(updatedCart) =>
          handleUpdatedCartInState(updatedCart)
        }
      />
    ))}
  </Container>
);

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  cart: PropTypes.shape({}),
  handleUpdatedCartInState: PropTypes.func.isRequired,
  currentBill: PropTypes.number,
};

Products.defaultProps = {
  cart: {},
  currentBill: 0,
};

export default Products;

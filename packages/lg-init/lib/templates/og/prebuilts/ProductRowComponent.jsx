import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import SlimWrapper from '../components/SlimWrapper';
import ProductComponent from '../components/ProductComponent';

const ProductRowComponet = ({  
  products,
  cart,
  handleUpdatedCartInState,
}) => (
  <Container>
    <SlimWrapper>
      <h2 className="my-5">Products</h2>
    </SlimWrapper>

    {products.map((i) => (
      <ProductComponent
        key={i.id}
        cart={cart}
        product={i}
        handleUpdatedCartInState={(updatedCart) =>
          handleUpdatedCartInState(updatedCart)
        }
      />
    ))}
  </Container>
);

ProductRowComponet.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  cart: PropTypes.shape({}),
  handleUpdatedCartInState: PropTypes.func.isRequired,
};

ProductRowComponet.defaultProps = {
  cart: {},
};

export default ProductRowComponet;

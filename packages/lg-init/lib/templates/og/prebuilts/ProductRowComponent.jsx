import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import SlimWrapper from '../components/SlimWrapper';
import ProductComponent from '../components/ProductComponent';

const ProductRowComponet = ({
  heading,
  products,
  cart,
  handleUpdatedCartInState,
}) => (
  <Container>
    <SlimWrapper>
      <h2 className="my-5">{heading}</h2>
    </SlimWrapper>

    {products.map((i) => (
      <ProductComponent
        key={i.sku}
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
  heading: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  cart: PropTypes.shape({}),
  handleUpdatedCartInState: PropTypes.func.isRequired,
};

ProductRowComponet.defaultProps = {
  cart: {},
};

export default ProductRowComponet;

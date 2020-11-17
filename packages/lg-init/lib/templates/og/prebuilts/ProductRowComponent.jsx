import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import SlimWrapper from '../components/SlimWrapper';
import ProductComponent from '../components/ProductComponent';
import Loading from '../components/Loading';

const ProductRowComponet = ({ heading, products, cart }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!heading && !products && !cart) setLoading(true);
    else setLoading(false);
  }, [heading, products, cart]);
  return (
    <>
      {loading ? (
        <Loading data={products} />
      ) : (
        <Container>
          <SlimWrapper>
            <h2 className="text-light my-5">{heading}</h2>
          </SlimWrapper>

          {products.map((i) => (
            <ProductComponent key={i.sku} cart={cart} product={i} />
          ))}
        </Container>
      )}
    </>
  );
};

ProductRowComponet.propTypes = {
  heading: PropTypes.string.isRequired,
  products: PropTypes.arrayOf().isRequired,
  cart: PropTypes.shape({}).isRequired,
};

export default ProductRowComponet;

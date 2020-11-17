import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import { formatUSD } from '../utils/formatUSD';
import SlimWrapper from '../components/SlimWrapper';

const ProductRowComponet = ({ heading, products }) => (
  <Container>
    <SlimWrapper>
      <h2 className="text-light my-5">{heading}</h2>
    </SlimWrapper>

    {products.map((i) => (
      <SlimWrapper
        key={i.sku}
        className="mb-2 align-items-center justify-content-center"
      >
        <Link href={`/${i.sku}`}>
          <div style={{ backgroundColor: '#242424', borderRadius: '15px' }}>
            <div
              style={{ cursor: 'pointer' }}
              className="d-flex align-items-end justify-content-between pr-2"
            >
              <img src={i.images[1]} alt={i.name} className="product_img_prc" />
              <div className="d-flex w-100 flex-column align-items-end justify-content-center text-right">
                <h5 className="text-light mt-3 mb-2 ellipse">{i.name}</h5>
                <span className="text-muted mb-1">
                  ${formatUSD(i.price)} USD
                </span>
              </div>
            </div>
          </div>
        </Link>
      </SlimWrapper>
    ))}
  </Container>
);

ProductRowComponet.propTypes = {
  heading: PropTypes.string.isRequired,
  products: PropTypes.arrayOf().isRequired,
};

export default ProductRowComponet;

import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../components/PageWrapper';
import ProductRowComponet from '../prebuilts/ProductRowComponent';

const HomePage = ({ data }) => (
  <PageWrapper data={data}>
    <ProductRowComponet
      heading={data.products.heading}
      products={data.products.products}
    />
  </PageWrapper>
);

HomePage.propTypes = {
  data: PropTypes.shape({
    hero: PropTypes.shape({
      image: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      subheading: PropTypes.string.isRequired,
      button: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired,
    products: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      products: PropTypes.arrayOf({}).isRequired,
    }).isRequired,
  }).isRequired,
};

export default HomePage;

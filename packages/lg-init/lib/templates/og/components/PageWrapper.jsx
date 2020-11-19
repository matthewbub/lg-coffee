import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../prebuilts/Navigation';
import Footer from './Footer';

const PageWrapper = ({ children, data, cart }) => (
  <div className="content">
    <Navigation data={data} cart={cart} />
    <main>{children}</main>
    <Footer data={data} />
  </div>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  cart: PropTypes.shape({}),
  data: PropTypes.shape({
    store: PropTypes.shape({}).isRequired,
  }).isRequired,
};

PageWrapper.defaultProps = {
  cart : {}
}

export default PageWrapper;

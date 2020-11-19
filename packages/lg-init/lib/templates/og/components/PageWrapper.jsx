import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../prebuilts/Navigation';
import Footer from './Footer';

const PageWrapper = ({ children, data, cart }) => (
  <div className="content">
    <Navigation data={data} cart={cart} theme={data.theme} />
    <main>{children}</main>
    <Footer
      data={data}
      contact={data.contact}
      theme={data.theme}
      store={data.store}
    />
  </div>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  cart: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({
    store: PropTypes.shape({}).isRequired,
    contact: PropTypes.string.isRequired,
    theme: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default PageWrapper;

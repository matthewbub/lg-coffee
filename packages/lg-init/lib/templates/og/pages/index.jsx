import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../components/PageWrapper';
import ProductRowComponet from '../prebuilts/ProductRowComponent';
import Loading from '../components/Loading';
import ProductComponent from '../components/ProductComponent';

const HomePage = ({ data, cart }) => {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (!data && !cart) setLoading(true)
    else setLoading(false)
  }, [data, cart])  

  return (
    <>
      { 
      loading ? <Loading data={data} />
      : <PageWrapper data={data}>
          <ProductRowComponet
            heading={data.products.heading}
            products={data.products.products}
            cart={cart}
          />
        </PageWrapper>
      }
    </>    
  )
};

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

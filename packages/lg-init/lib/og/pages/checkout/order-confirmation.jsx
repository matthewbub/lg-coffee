import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import PageWrapper from '../../lib/wrappers/PageWrapper';
import SlimWrapper from '../../lib/wrappers/SlimWrapper';

const OrderConfirmation = ({ data }) => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const confirmation = localStorage.getItem('order-confirmation');
    // eslint-disable-next-line no-unused-expressions
    confirmation ? setCart(JSON.parse(confirmation)) : null;
  }, []);

  return (
    <PageWrapper data={data} cart={cart}>
      <div className="my-5" style={{ height: '50vh' }}>
        <SlimWrapper className="my-5 align-items-center justify-content-center">
          <h3 className="mt-5">Order Confirmation</h3>

          <p className="mt-3">
            Thank you for shoppng with us. You should recive a receipt via email
            shortly. If you have any questions, feel free to{' '}
            <Link href={`mailto:${data.store.contact}`}>Contact Us</Link>
          </p>
        </SlimWrapper>
      </div>
    </PageWrapper>
  );
};

OrderConfirmation.propTypes = {
  cart: PropTypes.shape({}),
  data: PropTypes.shape({
    store: PropTypes.shape({
      contact: PropTypes.string,
    }),
  }),
};

OrderConfirmation.defaultProps = {
  cart: {},
  data: {
    store: {
      contact: '',
    },
  },
};

export default OrderConfirmation;

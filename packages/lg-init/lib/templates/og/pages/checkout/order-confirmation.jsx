/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import PageWrapper from '../../components/PageWrapper';
import SlimWrapper from '../../components/SlimWrapper';
import { formatUSD } from '../../utils/formatUSD';
import { H3, H4, P } from '../../components/_helpers';

const OrderConfirmation = ({ data }) => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const confirmation = localStorage.getItem('order-confirmation');
    // eslint-disable-next-line no-unused-expressions
    confirmation ? setCart(JSON.parse(confirmation)) : null;
  }, []);

  return (
    <PageWrapper data={data} cart={cart}>
      <div className="my-5">
        <SlimWrapper className="mb-2 align-items-center justify-content-center">
          <H3>Order Confirmation</H3>

          <P>
            Thank you for shoppng with us. You should recive a receipt via email
            shortly. If you have any questions, feel free to{' '}
            <Link href="/#contact">Contact Us</Link>
          </P>

          <H4>Your Order:</H4>

          {Object.keys(cart).map((i) => (
            <div key={cart[i].sku}>
              <div
                style={{ cursor: 'pointer' }}
                className="d-flex align-items-end justify-content-between pr-3"
              >
                <img
                  src={cart[i].images[1]}
                  alt={cart[i].name}
                  className="product_img_prc"
                />
                <div className="d-flex w-100 flex-column align-items-end justify-content-center text-right">
                  <h5 className="mt-3 mb-2 ellipse">{cart[i].name}</h5>
                  <span className="text-muted mb-3">
                    ${formatUSD(cart[i].price)} USD
                  </span>
                </div>
              </div>
            </div>
          ))}
        </SlimWrapper>
      </div>
    </PageWrapper>
  );
};

OrderConfirmation.propTypes = {
  cart: PropTypes.shape({}),
  data: PropTypes.shape({}),
};

OrderConfirmation.defaultProps = {
  cart: {},
  data: {},
};

export default OrderConfirmation;

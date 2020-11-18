import React from 'react';
import Link from 'next/link';
import PageWrapper from '../../components/PageWrapper';
import SlimWrapper from '../../components/SlimWrapper';
import { formatUSD } from '../../utils/formatUSD';
import {H3, H4, P} from '../../components/_helpers';

const OrderConfirmation = ({ cart, data}) => {
  console.log(cart);
  return (
    <PageWrapper data={data} cart={cart}>
      <div style={data.theme.primaryBackground} className="my-5">
        <SlimWrapper className="mb-2 align-items-center justify-content-center">
          <H3 theme={data.theme}>Order Confirmation</H3>
          <P theme={data.theme}>Thank you for shoppng with us. You should recive a receipt via email shortly. If you have any questions, feel free to <Link href='/#contact'>Contact Us</Link></P>
          <H4 theme={data.theme}>Your Order:</H4>
            {Object.keys(cart).map((i) => (
              <div>
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

export default OrderConfirmation;

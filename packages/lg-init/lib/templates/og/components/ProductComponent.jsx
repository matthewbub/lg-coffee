/* eslint-disable no-else-return */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import ProductPreview from './ProductPreview';
import QtyControl from './QtyControl';
import SlimWrapper from './SlimWrapper';
import Loading from './Loading';
import { formatUSD } from '../utils/formatUSD';

const ProductComponent = ({ product, cart }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!product && !cart) setLoading(true);
    else {
      setLoading(false);
    }
  }, [product, cart]);

  return (
    <>
      {loading ? (
        <Loading data={product} />
      ) : (
        <>
          <div role="button" onClick={handleShow}>
            {/* initial view */}
            <SlimWrapper className="mb-2 align-items-center justify-content-center">
              <div
                style={{ background: '#FFFFFF', borderRadius: '6px' }}
                className="border"
              >
                <div
                  style={{ cursor: 'pointer' }}
                  className="d-flex align-items-end justify-content-between pr-3"
                >
                  <img
                    src={product.images[1]}
                    alt={product.name}
                    className="product_img_prc"
                  />
                  <div className="d-flex w-100 flex-column align-items-end justify-content-center text-right">
                    <h5 className="mt-3 mb-2 ellipse">{product.name}</h5>
                    <span className="text-muted mb-3">
                     ${formatUSD(product.price)} USD
                    </span>
                  </div>
                </div>
              </div>
            </SlimWrapper>
          </div>

          <Modal show={show} onHide={handleClose}>
            <button
              type="button"
              onClick={handleClose}
              className="align-self-end mt-4 mr-4 btn btn-outline-dark"
              style={{
                border: 'none',
                background: 'none',
                fontSize: '16px',
                fontFamily: 'Montserrat',
              }}
            >
              Go Back
            </button>
            <ProductPreview product={product} />
            <div className="p-4">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{product ? `$${formatUSD(product.price)}` : null}</p>
              <QtyControl product={product} cart={cart} />
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

ProductComponent.propTypes = {
  // eslint-disable-next-line react/require-default-props
  cart: PropTypes.shape({}),
  product: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ProductComponent;

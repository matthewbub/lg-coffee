import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import ProductPreview from './ProductPreview';
import QtyControl from './QtyControl';
import SlimWrapper from './SlimWrapper';
import Loading from './Loading';
import { formatUSD } from '../utils/formatUSD';

const ProductComponent = ({ product, cart, handleUpdatedCartInState }) => {
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
          <SlimWrapper className="mb-2 align-items-center justify-content-center">
            <button 
              className="btn btn-outline-dark d-flex w-100"
              type="button" 
              onClick={handleShow}
              style={{
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
              <img
                src={product.images[0]}
                alt={product.name}
                className="product_img_prc"
              />
              <div className="d-flex w-100 flex-column align-items-end justify-content-center text-right">
                <h5 className="mt-3 mb-2 ellipse">{product.name}</h5>
                <span className="text-muted mb-3">
                  ${formatUSD(product.price)} USD
                </span>                  
              </div>              
            </button>
          </SlimWrapper>
          

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
              <QtyControl 
                product={product} 
                cart={cart} 
                handleUpdatedCartInState={(updatedCart) => handleUpdatedCartInState(updatedCart)} 
              />
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

ProductComponent.propTypes = {
  cart: PropTypes.shape({}),
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  handleUpdatedCartInState: PropTypes.func.isRequired,
};

ProductComponent.defaultProps = {
  cart : {}
}

export default ProductComponent;

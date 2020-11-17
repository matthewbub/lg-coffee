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
  const [productInModal, setProductInModal] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (!product && !cart) setLoading(true)
    else {
      setProductInModal(product)
      setLoading(false)
    }
  }, [product, cart])  

  return (
    <>      
      {
        loading ? <Loading data={product} />
        : 
          <>
            <div role="button" onClick={handleShow}>        
              <SlimWrapper          
                className="mb-2 align-items-center justify-content-center"
              >
                  <div style={{ backgroundColor: '#242424', borderRadius: '15px' }}>
                    <div
                      style={{ cursor: 'pointer' }}
                      className="d-flex align-items-end justify-content-between pr-2"
                    >
                      <img src={product.images[1]} alt={product.name} className="product_img_prc" />
                      <div className="d-flex w-100 flex-column align-items-end justify-content-center text-right">
                        <h5 className="text-light mt-3 mb-2 ellipse">{product.name}</h5>
                        <span className="text-muted mb-1">
                          ${formatUSD(product.price)} USD
                        </span>
                      </div>
                    </div>
                  </div>          
              </SlimWrapper>
            </div>

            <Modal show={show} onHide={handleClose}>
              <ProductPreview product={product} />
              <h2 className="product_view_title">{product.name}</h2>
              <p className="product_view_description">
                {product.description}
              </p>
              <p className="product_view_price">{product ? formatUSD(product.price) : null}</p>
              <QtyControl product={product} cart={cart} />
            </Modal>
          </>
      }
    </>
  );
};

ProductComponent.propTypes = {
  children: PropTypes.node.isRequired,
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

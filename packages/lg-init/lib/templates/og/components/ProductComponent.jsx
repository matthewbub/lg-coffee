import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ProductComponent = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
        {children}
      </Button>

      <Modal show={show} onHide={handleClose}>
        Jello
      </Modal>
    </>
  );
};

ProductComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductComponent;

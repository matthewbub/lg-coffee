import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Pill from '../components/Pill';

const PrimaryModal = ({ children, className, title }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Pill title={title} className={className} handleShow={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex flex-column" style={{ maxWidth: '80%' }}>
            <button
              type="button"
              onClick={handleClose}
              className="align-self-end mt-4 btn btn-outline-dark"
              style={{
                border: 'none',
                background: 'none',
                fontSize: '16px',
              }}
            >
              Go Back
            </button>
            {children}
          </div>
        </div>
      </Modal>
    </>
  );
};

PrimaryModal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

PrimaryModal.defaultProps = {
  className: '',
};

export default PrimaryModal;

import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

const H1 = ({ children, className }) => (
  <h1 className={clsx(className)}>
    {children}
  </h1>
);

H1.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

H1.defaultProps = {
  className: '',
};

const H2 = ({ children, className }) => (
  <h2 className={clsx(className)}>
    {children}
  </h2>
);

H2.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

H2.defaultProps = {
  className: '',
};

const H3 = ({ children, className }) => (
  <h3 className={clsx(className)}>
    {children}
  </h3>
);

H3.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

H3.defaultProps = {
  className: '',
};

const H4 = ({ children, className }) => (
  <h4 className={clsx(className)}>
    {children}
  </h4>
);

H4.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

H4.defaultProps = {
  className: '',
};

const H5 = ({ children, className }) => (
  <h5 className={clsx(className)}>
    {children}
  </h5>
);

H5.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

H5.defaultProps = {
  className: '',
};

const H6 = ({ children, className }) => (
  <h6 className={clsx(className)}>
    {children}
  </h6>
);

H6.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

H6.defaultProps = {
  className: '',
};

const P = ({ children, className }) => (
  <p className={clsx(className)}>
    {children}
  </p>
);

P.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

P.defaultProps = {
  className: '',
};

const Pill = ({ title, className, handleShow }) => (
  <button
    id={title}
    type="button"
    onClick={handleShow}
    style={{ width: '200px', border: '0', padding: '0' }}
    className={clsx('btn btn-outline-dark mt-2 pl-1 text-left', className)}
  >
    {title}
  </button>
);

Pill.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleShow: PropTypes.func.isRequired,
};

const PrimaryModal = ({ children, className, title }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Pill
        title={title}
        className={className}
        handleShow={handleShow}
      />
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

const Wrap = ({ children, className }) => (
  <div className={clsx(className, 'd-flex flex-wrap')}>{children}</div>
);

Wrap.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Wrap.defaultProps = {
  className: '',
};

export { H1, H2, H3, H4, H5, H6, P, Pill, PrimaryModal, Wrap };

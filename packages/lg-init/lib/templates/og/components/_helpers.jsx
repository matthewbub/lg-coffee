import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

const defaultTheme = {
  text: { color: '#212529' },
  secondaryText: { color: '#6C757D' },
  primaryBackground: { backgroundColor: '#F8F9FA' },
  secondaryBackground: { backgroundColor: '#FFFFFF' },
};

const H1 = ({ children, className, theme }) => (
  <h1 className={clsx(className,)} style={theme.text || defaultTheme.text}>{children}</h1>
);

H1.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme: PropTypes.shape({
    text: PropTypes.shape({})
  }),
};

H1.defaultProps = {
  className: '',
  theme: {
    text: defaultTheme.text
  },
}

const H2 = ({ children, className, theme }) => (
  <h2 className={clsx(className,)} style={theme.text || defaultTheme.text}>{children}</h2>
);

H2.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme: PropTypes.shape({
    text: PropTypes.shape({})
  }),
};

H2.defaultProps = {
  className: '',
  theme: {
    text: defaultTheme.text
  }
}

const H3 = ({ children, className, theme }) => (
  <h3 className={clsx(className,)} style={theme.text || defaultTheme.text}>{children}</h3>
);

H3.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme: PropTypes.shape({
    text: PropTypes.shape({})
  }),
};

H3.defaultProps = {
  className: '',
  theme: {
    text: defaultTheme.text
  }
}

const H4 = ({ children, className, theme }) => (
  <h4 className={clsx(className,)} style={theme.text || defaultTheme.text}>{children}</h4>
);

H4.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme: PropTypes.shape({
    text: PropTypes.shape({})
  }),
};

H4.defaultProps = {
  className: '',
  theme: {
    text: defaultTheme.text
  }
}

const H5 = ({ children, className, theme }) => (
  <h5 className={clsx(className,)} style={theme.text || defaultTheme.text}>{children}</h5>
);

H5.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme: PropTypes.shape({
    text: PropTypes.shape({})
  }),
};

H5.defaultProps = {
  className: '',
  theme: {
    text: defaultTheme.text
  }
}

const H6 = ({ children, className, theme }) => (
  <h6 className={clsx(className,)} style={theme.text || defaultTheme.text}>{children}</h6>
);

H6.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme: PropTypes.shape({
    text: PropTypes.shape({})
  }),
};

H6.defaultProps = {
  className: '',
  theme: {
    text: defaultTheme.text
  }
}

const P = ({ children, className, theme }) => (
  <p className={clsx(className,)} style={theme.text || defaultTheme.text}>{children}</p>
);

P.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme: PropTypes.shape({
    text: PropTypes.shape({})
  }),
};

P.defaultProps = {
  className: '',
  theme: {
    text: defaultTheme.text
  },
};


const Pill = ({ title, className, handleShow }) => (
  <button
    id={title}
    type="button"
    onClick={handleShow}
    className={clsx('btn btn-outline-dark mr-2 mt-2 lg_pill', className)}
  >
    {title}
  </button>
);

Pill.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleShow: PropTypes.func.isRequired,
};

const PrimaryModal = ({ children, className, theme, title }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Pill
        title={title}
        className={className}
        handleShow={handleShow}
        style={theme.secondaryBackground || defaultTheme.secondaryBackground}
      />
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
        {children}
      </Modal>
    </>
  );
};

PrimaryModal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme: PropTypes.shape({
    secondaryBackground: PropTypes.shape({}).isRequired,
  }).isRequired,
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

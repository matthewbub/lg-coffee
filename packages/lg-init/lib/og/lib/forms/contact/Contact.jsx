/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import ContactFrom from './ContactForm';

const Contact = ({ store }) => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleResponse = (msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
    } else {
      setStatus({
        info: { error: true, msg },
      });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: e.target.email.value,
        message: e.target.message.value,
        owner: store.contact,
      }),
    });

    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <ContactFrom />

        <button
          type="submit"
          className="btn btn-outline-dark mb-5 mt-2"
          disabled={status.submitting}
        >
          {
            // eslint-disable-next-line no-nested-ternary
            !status.submitting
              ? !status.submitted
                ? 'Send Message'
                : 'Message Sent'
              : 'Sending Message...'
          }
        </button>
      </Form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && (
        <div className="success">{status.info.msg}</div>
      )}
    </>
  );
};

Contact.propTypes = {
  store: PropTypes.shape({
    contact: PropTypes.string,
  }),
};

export default Contact;

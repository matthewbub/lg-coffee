import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { H2 } from './_helpers';

const ContactForm = ({ theme }) => (
  <div className="d-flex flex-column align-items-center">
    <div style={{ maxWidth: '80%' }}>
      <Form.Row>
        <H2 className="mt-4" theme={theme}>
          Get In Touch
        </H2>

        <Form.Control
          className="mt-3"
          type="text"
          label="name"
          name="name"
          placeholder="Jane Doe"
          required
          style={{
            border: '0',
          }}
        />

        <Form.Control
          className="mt-3"
          type="text"
          label="email"
          name="email"
          placeholder="jane.doe@example.com"
          required
          style={{
            border: '0',
          }}
        />

        <Form.Control
          className="my-3"
          type="text"
          as="textarea"
          label="body"
          name="body"
          placeholder="Inquiring about my recent purchase..."
          required
          style={{
            border: '0',
          }}
        />

        <Form.Check
          className="my-3"
          type="checkbox"
          label="I am not a robot"
          name="body"
          placeholder="Your message here"
          required
          style={{
            border: '0',
          }}
        />
      </Form.Row>
    </div>
  </div>
);

ContactForm.propTypes = {
  // eslint-disable-next-line react/require-default-props
  theme: PropTypes.shape({}),
};

export default ContactForm;

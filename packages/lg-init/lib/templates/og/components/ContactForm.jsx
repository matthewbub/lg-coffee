import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { H2 } from './_helpers';

const ContactForm = ({ theme }) => (
  <Form.Row>
    <H2 className="mt-4" theme={theme}>
      Get In Touch
    </H2>

    <Form.Control
      className="mt-3"
      type="text"
      label="email"
      name="email"
      placeholder="jane.doe@example.com"
      required
    />

    <Form.Control
      className="my-3"
      type="text"
      as="textarea"
      rows={3}
      label="message"
      name="message"
      placeholder="Inquiring about my recent purchase..."
      required
    />

    <Form.Check
      className="my-3"
      type="checkbox"
      label="I am not a robot"
      required
    />
  </Form.Row>
);

ContactForm.propTypes = {
  // eslint-disable-next-line react/require-default-props
  theme: PropTypes.shape({}).isRequired,
};

export default ContactForm;

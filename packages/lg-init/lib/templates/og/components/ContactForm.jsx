import React from 'react';
import Form from 'react-bootstrap/Form';
import { H2 } from './_helpers';

const ContactForm = () => (
  <Form.Row>
    <H2 className="mt-4">
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

export default ContactForm;

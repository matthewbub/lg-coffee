import React from 'react';
import Form from 'react-bootstrap/Form';

const BillingDetailsFields = () => (
  <Form.Row>
    <h2 className="mt-5">Billing Information</h2>

    <Form.Control
      className="mt-3"
      type="text"
      label="name"
      name="name"
      placeholder="Jane Doe"
      required
    />

    <Form.Control
      className="mt-3"
      type="text"
      label="email"
      name="email"
      placeholder="jane.doe@example.com"
      required
    />

    <Form.Control
      className="mt-3"
      type="text"
      label="address"
      name="address"
      placeholder="185 Berry St. Suite 550"
      required
    />

    <Form.Control
      className="mt-3"
      type="text"
      label="city"
      name="city"
      placeholder="San Francisco"
      required
    />

    <Form.Control
      className="mt-3"
      type="text"
      label="state"
      name="state"
      placeholder="CA"
      required
    />

    <Form.Control
      className="my-3"
      type="text"
      label="zip"
      name="zip"
      placeholder="94103"
      required
    />
  </Form.Row>
);

export default BillingDetailsFields;

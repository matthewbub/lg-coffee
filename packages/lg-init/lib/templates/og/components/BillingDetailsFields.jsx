import React from 'react';
import Form from 'react-bootstrap/Form';

const BillingDetailsFields = () => (
  <>
    <Form.Row>
      <h2 className="text-light mt-5">Billing Information</h2>
      <Form.Control
        className="bg-dark text-light mt-3"
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
        className="bg-dark text-light mt-3"
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
        className="bg-dark text-light mt-3"
        type="text"
        label="address"
        name="address"
        placeholder="185 Berry St. Suite 550"
        required
        style={{
          border: '0',
        }}
      />

      <Form.Control
        className="bg-dark text-light mt-3"
        type="text"
        label="city"
        name="city"
        placeholder="San Francisco"
        required
        style={{
          border: '0',
        }}
      />

      <Form.Control
        className="bg-dark text-light mt-3"
        type="text"
        label="state"
        name="state"
        placeholder="CA"
        required
        style={{
          border: '0',
        }}
      />

      <Form.Control
        className="bg-dark text-light my-3"
        type="text"
        label="zip"
        name="zip"
        placeholder="94103"
        required
        style={{
          border: '0',
        }}
      />
    </Form.Row>
  </>
);

export default BillingDetailsFields;

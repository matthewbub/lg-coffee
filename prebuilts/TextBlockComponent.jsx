import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TextBlockComponent = ({ heading, subheading }) => (
  <Container>
    <Row>
      <Col xs={12} className="d-flex flex-column align-items-center my-5">
        <h2 className="text-light my-4">{heading}</h2>
        <p className="text-light">{subheading}</p>
      </Col>
    </Row>
  </Container>
);

TextBlockComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
};

export default TextBlockComponent;

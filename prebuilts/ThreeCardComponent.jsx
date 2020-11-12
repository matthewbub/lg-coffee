import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ThreeCardComponent = ({ threeCardComponent }) => (!Array.isArray(threeCardComponent) ? (
  <div>Error loading data. Check the docs.</div>
  ) : (
    <Container>
      <Row className="my-5">
        {threeCardComponent.map((i) => (
          <Col sm={12} md={4}>
            <div className="d-flex flex-column align-items-center text-center p-3">
              <img
                src={i.image}
                alt={i.heading}
                style={{
                  height: '150px',
                  width: '150px',
                }}
              />
              <h3 className="text-light my-4">{i.heading}</h3>
              <p className="text-light">{i.subheading}</p>
              <Link href={i.href}>
                <span
                  className="text-light"
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  Learn More
                </span>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  ));

ThreeCardComponent.propTypes = {
  threeCardComponent: PropTypes.arrayOf({}).isRequired,
};

export default ThreeCardComponent;

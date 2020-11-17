import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';

const HeroComponent = ({ image, heading, subheading, button, href }) => (
  <Container fluid>
    <div
      style={{ backgroundImage: `url("${image}")` }}
      className="fluid-container hero_image"
    >
      <div className="">
        <h1 className="font-weight-bold">{heading}</h1>
        <p className="font-weight-normal">{subheading}</p>
        <Link className="btn btn-outline-dark" href={href}>
          <button className="btn btn-outline-dark" type="button">
            {button}
          </button>
        </Link>
      </div>
    </div>
  </Container>
);

HeroComponent.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default HeroComponent;

import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SlimWrapper from './SlimWrapper';
import ContactFrom from './ContactForm';
import { H6, H2, PrimaryModal, Wrap } from './_helpers';

const date = new Date();
const year = date.getFullYear();

const Footer = ({ theme }) => (
  <footer>
    <Container className="my-5">
      <SlimWrapper>
        <H2 theme={theme}>More Info</H2>
        <Wrap>
          <PrimaryModal title="About" theme={theme}>
            Hello
          </PrimaryModal>
          <PrimaryModal title="FAQ" theme={theme}>
            Hello
          </PrimaryModal>
          <PrimaryModal title="Contact" theme={theme}>
            <ContactFrom />
            <button
              type="submit"
              className="btn btn-outline-dark mb-5 mt-2 mx-4"
            >
              Send Message
            </button>
          </PrimaryModal>
        </Wrap>
      </SlimWrapper>

      <Row>
        <Col className="d-flex justify-content-center">
          <H6 className="m-5" theme={theme}>
            Copyright {year}
          </H6>
        </Col>
      </Row>
    </Container>
  </footer>
);

Footer.propTypes = {
  theme: PropTypes.shape({
    text: PropTypes.shape({}).isRequired,
    secondaryText: PropTypes.shape({}).isRequired,
    primaryBackground: PropTypes.shape({}).isRequired,
    secondaryBackground: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default Footer;

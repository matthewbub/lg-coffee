import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SlimWrapper from '../wrappers/SlimWrapper';
import PrimaryModal from './PrimaryModal';
import Wrap from '../components/Wrap';
import FAQ from '../static/FAQ.mdx';
import About from '../static/About.mdx';
import TermsAndConditions from '../static/TermsAndConditions.mdx';
import ShippingAndReturns from '../static/ShippingAndReturns.mdx';
import PrivacyPolicy from '../static/PrivacyPolicy.mdx';
import Pill from '../components/Pill';

const date = new Date();
const year = date.getFullYear();

const Footer = ({ data }) => {
  const { store } = data;
  return (
    <footer>
      <Container className="my-5">
        <SlimWrapper>
          <h2>More Info</h2>
          <Wrap>
            <div className="d-flex flex-column">
              <PrimaryModal title="About">
                <About />
              </PrimaryModal>
              <PrimaryModal title="FAQ">
                <FAQ />
              </PrimaryModal>
              <a
                href={`mailto:${store.contact}`}
                target="_blank"
                rel="noreferrer"
              >
                <Pill title="Contact" />
              </a>
            </div>
            <div className="d-flex flex-column">
              <PrimaryModal title="Terms and Conditions">
                <TermsAndConditions />
              </PrimaryModal>
              <PrimaryModal title="Privacy Policy">
                <PrivacyPolicy />
              </PrimaryModal>
              <PrimaryModal title="Shipping and Returns">
                <ShippingAndReturns />
              </PrimaryModal>
            </div>
          </Wrap>
        </SlimWrapper>

        <Row>
          <Col className="d-flex justify-content-center">
            <p className="m-5 text-center">
              Copyright <br /> {year}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  data: PropTypes.shape({
    store: PropTypes.shape({
      contact: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Footer;

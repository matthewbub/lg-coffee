import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SlimWrapper from '../wrappers/SlimWrapper';
import PrimaryModal from './PrimaryModal';
import Contact from '../forms/contact/ContactComponent';
import Wrap from '../components/Wrap'
import FAQ from '../static/FAQ.mdx';
import About from '../static/About.mdx';
import TermsAndConditions from '../static/TermsAndConditions.mdx';
import ShippingAndReturns from '../static/ShippingAndReturns.mdx';
import PrivacyPolicy from '../static/PrivacyPolicy.mdx';

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
              <PrimaryModal title="Contact">
                <Contact store={store} />
              </PrimaryModal>
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
    store: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default Footer;

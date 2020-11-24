/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SlimWrapper from './SlimWrapper';
import Contact from './ContactComponent';
import FAQComonent from './FAQComponent';
import AboutComponent from './AboutComponent';
import TermsAndConditions from './TermsAndConditions.mdx';
import ShippingAndReturns from './ShippingAndReturns.mdx';
import PrivacyPolicy from './PrivacyPolicy.mdx';
import { P, H2, PrimaryModal, Wrap } from './_helpers';

const date = new Date();
const year = date.getFullYear();

const Footer = ({ data }) => {
  const { store } = data;
  return (
    <footer>
      <Container className="my-5">
        <SlimWrapper>
          <H2>More Info</H2>
          <Wrap>
            <div className="d-flex flex-column">
              <PrimaryModal title="About">
                <AboutComponent store={store} />
              </PrimaryModal>
              <PrimaryModal title="FAQ">
                <FAQComonent store={store}/>
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
            <P className="m-5 text-center">
              Copyright <br /> {year}
            </P>
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

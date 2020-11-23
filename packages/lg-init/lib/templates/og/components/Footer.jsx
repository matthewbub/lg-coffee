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
  const { theme, store } = data;
  return (
    <footer>
      <Container className="my-5">
        <SlimWrapper>
          <H2 theme={theme}>More Info</H2>
          <Wrap>
            <div className="d-flex flex-column">
              <PrimaryModal title="About" theme={theme}>
                <AboutComponent theme={theme} store={store} />
              </PrimaryModal>
              <PrimaryModal title="FAQ" theme={theme}>
                <FAQComonent store={store} theme={theme} />
              </PrimaryModal>
              <PrimaryModal title="Contact" theme={theme}>
                <Contact store={store} theme={theme} />
              </PrimaryModal>
            </div>
            <div className="d-flex flex-column">
              <PrimaryModal title="Terms and Conditions" theme={theme}>
                <TermsAndConditions />
              </PrimaryModal>
              <PrimaryModal title="Privacy Policy" theme={theme}>
                <PrivacyPolicy />
              </PrimaryModal>
              <PrimaryModal title="Shipping and Returns" theme={theme}>
                <ShippingAndReturns />
              </PrimaryModal>
            </div>
          </Wrap>
        </SlimWrapper>

        <Row>
          <Col className="d-flex justify-content-center">
            <P className="m-5 text-center" theme={theme}>
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
    theme: PropTypes.shape({
      text: PropTypes.shape({}).isRequired,
      secondaryText: PropTypes.shape({}).isRequired,
      primaryBackground: PropTypes.shape({}).isRequired,
      secondaryBackground: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Footer;

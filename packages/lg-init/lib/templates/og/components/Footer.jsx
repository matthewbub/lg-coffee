import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SlimWrapper from './SlimWrapper';
import Contact from './ContactComponent';
import Loading from './Loading';
import FAQComonent from './FAQComponent';
import AboutComponent from './AboutComponent';
import { H6, H2, PrimaryModal, Wrap } from './_helpers';

const date = new Date();
const year = date.getFullYear();

const Footer = ({ data, theme, store }) => (
  <footer>
    <Container className="my-5">
      <SlimWrapper>
        <H2 theme={theme}>More Info</H2>
        <Wrap>
          <PrimaryModal title="About" theme={theme}>
            <AboutComponent theme={theme} store={store}/>
          </PrimaryModal>
          <PrimaryModal title="FAQ" theme={theme}>
            { data ? <FAQComonent store={store} theme={theme} /> : <Loading data={store} />}
          </PrimaryModal>
          <PrimaryModal title="Contact" theme={theme}>
            <Contact store={store}/>
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
  data: PropTypes.shape({}),
  theme: PropTypes.shape({
    text: PropTypes.shape({}).isRequired,
    secondaryText: PropTypes.shape({}).isRequired,
    primaryBackground: PropTypes.shape({}).isRequired,
    secondaryBackground: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default Footer;

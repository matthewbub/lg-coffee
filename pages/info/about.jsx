import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import PageWrapper from '../../components/PageWrapper';
import TextWrapper from '../../components/TextWrapper';

const About = ({ data }) => (
  <PageWrapper data={data}>
    <Container style={{ minHeight: '580px' }}>
      <TextWrapper>
        <h1 className="text-light mt-4">About</h1>
        <p className="text-light">{data.store.info.about}</p>
      </TextWrapper>
    </Container>
  </PageWrapper>
);

About.propTypes = {
  data: PropTypes.shape({
    store: PropTypes.shape({
      info: PropTypes.shape({
        about: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default About;

import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import PageWrapper from '../../components/PageWrapper';
import TextWrapper from '../../components/TextWrapper';

const Faq = ({ data }) => (
  <PageWrapper data={data}>
    <Container>
      <TextWrapper>
        <h1 className="text-light mt-4">FAQ</h1>
      </TextWrapper>
      {data.store.info.faq.map((i) => (
        <TextWrapper>
          <h3 className="text-light">{i.q}</h3>
          <p className="text-light">{i.a}</p>
        </TextWrapper>
      ))}
    </Container>
  </PageWrapper>
);

Faq.propTypes = {
  data: PropTypes.shape({
    store: PropTypes.shape({
      info: PropTypes.shape({
        faq: PropTypes.arrayOf(
          PropTypes.shape({
            q: PropTypes.string.isRequired,
            a: PropTypes.string.isRequired,
          }).isRequired,
        ).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Faq;

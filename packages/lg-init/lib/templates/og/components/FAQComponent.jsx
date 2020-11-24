/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { H4, P } from './_helpers';

const FAQComponent = ({ store }) => (
  <div className="p-4">
    {store.info.faq.map((i) => (
      <div key={i.q}>
        <H4>{i.q}</H4>
        <P>{i.a}</P>
      </div>
    ))}
  </div>
);

FAQComponent.propTypes = {
  store: PropTypes.shape({
    info: PropTypes.shape({
      faq: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }),
};

export default FAQComponent;

import React from 'react';
import PropTypes from 'prop-types';
import { H4, P } from './_helpers';

const FAQComponent = ({theme, store}) => (
  <div className="p-4">
    {
      store.info.faq.map((i) => (
        <>
          <H4 theme={theme}>{i.q}</H4>
          <P theme={theme}>{i.a}</P>
        </>
      ))
    }
  </div>
)

export default FAQComponent;

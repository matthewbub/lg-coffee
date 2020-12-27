/* eslint-disable react/require-default-props */
/* eslint-disable no-undef */
import React from 'react';
import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';

const NextSEOWrapper = ({ name, description, url }) => (
  <NextSeo
    title={name}
    description={description}
    canonical={url}
    openGraph={{
      url: { url },
      title: { name },
      description: { description },
      // images: [
      //   {
      //     url: 'https://www.example.ie/og-image-01.jpg',
      //     width: 800,
      //     height: 600,
      //     alt: 'Og Image Alt',
      //   },
      //   {
      //     url: 'https://www.example.ie/og-image-02.jpg',
      //     width: 900,
      //     height: 800,
      //     alt: 'Og Image Alt Second',
      //   },
      //   { url: 'https://www.example.ie/og-image-03.jpg' },
      //   { url: 'https://www.example.ie/og-image-04.jpg' },
      // ],
    }}
  />
);

NextSEOWrapper.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

export default NextSEOWrapper;

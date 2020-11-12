import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../prebuilts/Navigation';
import ThreeCardComponent from '../prebuilts/ThreeCardComponent';
import TextBlockComponent from '../prebuilts/TextBlockComponent';
import HeroComponent from '../prebuilts/HeroComponent';
import ProductRowComponet from '../prebuilts/ProductRowComponent';

const Preview = ({ data }) => (
  <>
    <Navigation
      logo={data.navigationComponent.logo}
      navigation={data.navigation}
    />
    <HeroComponent
      image={data.heroComponent.image}
      heading={data.heroComponent.heading}
      subheading={data.heroComponent.subheading}
      button={data.heroComponent.button}
      href={data.heroComponent.href}
    />
    <ThreeCardComponent threeCardComponent={data.threeCardComponent} />
    <TextBlockComponent
      heading={data.textBlockComponent.heading}
      subheading={data.textBlockComponent.subheading}
    />
    <ProductRowComponet
      heading={data.productsRowComponent.heading}
      products={data.productsRowComponent.products}
    />
  </>
);

Preview.propTypes = {
  data: PropTypes.shape({
    navigation: PropTypes.arrayOf().isRequired,
    navigationComponent: PropTypes.shape({
      logo: PropTypes.string.isRequired,
    }).isRequired,
    heroComponent: PropTypes.shape({
      image: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      subheading: PropTypes.string.isRequired,
      button: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }),
    threeCardComponent: PropTypes.shape({}).isRequired,
    textBlockComponent: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      subheading: PropTypes.string.isRequired,
    }).isRequired,
    productsRowComponent: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      products: PropTypes.arrayOf().isRequired,
    }),
  }).isRequired,
};

export default Preview;

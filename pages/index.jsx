import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import PageWrapper from '../components/PageWrapper';

const ProductCard = ({ productPath, imagePath, productTitle }) => (
  <section className="product_card_v m-1">
    <Link className="no-link" href={productPath}>
      <div
        className="product_image"
        style={{ backgroundImage: `url("${imagePath}")` }}
      >
        <h2 className="text-light font-weight-bold">{productTitle}</h2>
      </div>
    </Link>
  </section>
);

ProductCard.propTypes = {
  productPath: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  productTitle: PropTypes.string.isRequired,
};

const HomeContent = ({ data }) => {
  const { products } = data;
  const { hero } = data;
  return (
    <div>
      <div
        style={{ backgroundImage: `url("${hero.heroImage}")` }}
        className="fluid-container hero_image"
      >
        <div className="">
          <h1 className="font-weight-bold">{hero.heroHeadline}</h1>
          <p className="font-weight-normal">{hero.heroSubHeadline}</p>
          <Link className="btn btn-outline-dark" href={hero.heroPath}>
            {hero.heroButton}
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="d-flex products_wrapper">
          {products.map((i) => (
            <ProductCard
              key={i.productSku}
              imagePath={i.imagePath}
              imagePathHovered={i.imagePathHovered}
              productTitle={i.productTitle}
              productDescription={i.productDescription}
              productPrice={i.productPrice}
              productPath={`/view-product${i.productSku}`}
              productBgIsLight={i.productBgIsLight}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

HomeContent.propTypes = {
  data: PropTypes.shape({
    products: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
    hero: PropTypes.shape({
      heroImage: PropTypes.string.isRequired,
      heroHeadline: PropTypes.string.isRequired,
      heroSubHeadline: PropTypes.string.isRequired,
      heroPath: PropTypes.string.isRequired,
      heroButton: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const HomePage = ({ data }) => (
  <PageWrapper data={data}>
    <HomeContent data={data} />
  </PageWrapper>
);

HomePage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default HomePage;

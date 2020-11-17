import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

const ProductPreview = ({ product }) => {
  const [primaryImage, setPrimaryImage] = useState();

  useEffect(() => {
    setPrimaryImage(product);
  }, [product]);
console.log(product)
  if (!primaryImage) return <Loading />;

  const handlePrimaryImageToggle = (i) => setPrimaryImage(i);

  return (
    <section className="col-md-6 col-sm-12 bg-light pid_section">
      <img className="main_img" src={primaryImage} alt="view product" />
      <div className="img_previews">
        {product.images.map((i) => (
          <button
            type="button"
            key={i}
            className="img_preview_button"
            onClick={() => handlePrimaryImageToggle(i)}
          >
            <img src={i} alt="alt product views" />
          </button>
        ))}
      </div>
    </section>
  );
};

ProductPreview.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

export default ProductPreview;

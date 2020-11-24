import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';

const ProductPreview = ({ product }) => {
  const [primaryImage, setPrimaryImage] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!product) setLoading(true);
    else {
      setPrimaryImage(product.images[0]);
      setLoading(false);
    }
  }, [product]);

  const handlePrimaryImageToggle = (i) => setPrimaryImage(i);

  return (
    <>
      {loading ? (
        <Loading data={product} />
      ) : (
        <section className="d-flex flex-column justify-content-center align-items-center p-2">
          <img
            className="primary_image_preview"
            src={primaryImage}
            alt="view product"
          />
          <div className="img_previews">
            {!product.images.length <= 1
              ? null
              : product.images.map((i) => (
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
      )}
    </>
  );
};

ProductPreview.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

export default ProductPreview;

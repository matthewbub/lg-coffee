import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../components/PageWrapper';
import QtyControl from '../../components/QtyControl';

const ProductPreview = ({ product }) => {
  const [primaryImage, setPrimaryImage] = useState(product.productImages[0]);

  const handlePrimaryImageToggle = (i) => setPrimaryImage(i);
  return (
    <section className="col-md-6 col-sm-12 bg-light pid_section">
      <img className="main_img" src={primaryImage} alt="view product" />
      <div className="img_previews">
        {product.productImages.map((i) => (
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
    productImages: PropTypes.arrayOf.isRequired,
  }).isRequired,
};

const ViewProduct = ({ data }) => {
  const router = useRouter();
  const { pid } = router.query;
  const [product, setProduct] = useState(null);
  const { products } = data;

  useEffect(() => {
    for (let i = 0; i < products.length; i + 1) {
      Object.keys(products[i]).map(() =>
        products[i].productSku === `/${pid}`
          ? setProduct(products[i])
          : "Whoops Looks like that product isn't avaiable right now."
      );
    }
  });

  if (product) {
    return (
      <PageWrapper data={data}>
        <div className="fluid-container bg-light pt-5 pb-5">
          <div className="container">
            <div className="row">
              <ProductPreview product={product} />
              <section className="col-md-6 col-sm-12 bg-light pid_section">
                <div className="p-sm-3">
                  <h2 className="product_view_title">{product.productTitle}</h2>
                  <p className="product_view_description">
                    {product.productDescription}
                  </p>
                </div>
                <div className="align-self-end p-sm-3 d-flex flex-column align-items-end">
                  <p className="product_view_price">{product.productPrice}</p>
                  <QtyControl product={product} />
                </div>
              </section>
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }
  return <div>Loading...</div>;
};

ViewProduct.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default ViewProduct;

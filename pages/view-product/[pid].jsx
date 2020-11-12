import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../components/PageWrapper';
import QtyControl from '../../components/QtyControl';
import Loading from '../../components/Loading';
import ProductPreview from '../../components/ProductPreview';

const ViewProduct = ({ data, cart }) => {
  const router = useRouter();
  const { pid } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < data.products.length; i++) {
      // eslint-disable-next-line no-unused-expressions
      data.products[i].productSku === `${pid}`
        ? setProduct(data.products[i])
        : null;
    }
  }, [data.products, pid]);

  if (!product) {
    return <Loading data={data} />;
  }
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
                <QtyControl product={product} cart={cart} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

ViewProduct.propTypes = {
  data: PropTypes.shape({
    products: PropTypes.arrayOf(
      PropTypes.shape({
        productTitle: PropTypes.string.isRequired,
        productDescription: PropTypes.string.isRequired,
        productPrice: PropTypes.string.isRequired,
        productSku: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  cart: PropTypes.shape({}).isRequired,
};

export default ViewProduct;

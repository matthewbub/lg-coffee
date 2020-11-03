import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Header, Footer } from "../../components/layout";

const ViewProduct = (props) => {
  const router = useRouter();
  const { pid } = router.query;
  const [product, setProduct] = useState(null);
  const products = props.data.products;

  // for (let i = 0; i < products.length; i++) {
  //   Object.keys(products[i]).map((y) =>
  //     products[i].productSku === "/" + pid
  //       ? useEffect(() => {
  //          return setProduct(products[i])
  //         })
  //       : "Whoops Looks like that product isn't avaiable right now."
  //   );
  // }

  useEffect(() => {
    for (let i = 0; i < products.length; i++) {
      Object.keys(products[i]).map((y) =>
        products[i].productSku === "/" + pid
          ? setProduct(products[i])
          : "Whoops Looks like that product isn't avaiable right now."
      );
    }
  });

  if (product) {
    return (
      <div>
        <Header data={props.data} />
        <div className="fluid-container bg-light pt-5 pb-5">
          <div className="container">
            <div className="row">
              <section className="col-md-6 col-sm-12 bg-light pid_section">
                <img
                  className="main_img"
                  src={product.productImages[0]}
                  alt={"product image"}
                />
                <div className="img_previews">
                  {product.productImages.map((i) => (
                    <button className="img_preview_button">
                      <img src={i} alt={"product image"} />
                    </button>
                  ))}
                </div>
              </section>
              <section className="col-md-6 col-sm-12 bg-light pid_section">
                <div className="p-sm-3">
                  <h2 className="product_view_title">{product.productTitle}</h2>
                  <p className="product_view_description">
                    {product.productDescription}
                  </p>
                </div>
                <div className="align-self-end p-sm-3 d-flex flex-column align-items-end">
                  <p className="product_view_price">{product.productPrice}</p>
                  <button className="btn btn-outline-dark">Add To Cart</button>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Footer data={props.data} />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default ViewProduct;

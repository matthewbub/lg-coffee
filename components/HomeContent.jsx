import { useHover } from "../utils/helpers";

const ProductCard = (props) => {
  const [hoverRef, isHovered] = useHover();

  let dom = {};

  props.productBgIsLight
    ? (dom = {
        title: "product_title",
        hoverTitle: "big_title",
        text: "product_text",
        price: "product_text align-self-end product_price",
      })
    : (dom = {
        title: "text-light product_title",
        hoverTitle: "text-light big_title",
        text: "text-light product_text",
        price: "text-light product_text align-self-end product_price",
      });

  return (
    <section className="product_card_v m-1">
      <a className="no-link" href={props.productPath} ref={hoverRef}>
        {isHovered ? (
          <div
            className="product_image"
            style={{ backgroundImage: `url("${props.imagePathHovered}")` }}
          >
            <div className="holdstill">
              <h3 className={dom.title}>{props.productTitle}</h3>
              <p className={dom.text}>{props.productDescription}</p>
            </div>
            <h4 className={dom.price}>{props.productPrice}</h4>
          </div>
        ) : (
          <div
            className="product_image"
            style={{ backgroundImage: `url("${props.imagePath}")` }}
          >
            <h3 className={dom.title}>{props.productTitle}</h3>
          </div>
        )}
      </a>
    </section>
  );
};

const HomeContent = (props) => {
  const products = props.data.products;
  const hero = props.data.store.hero;
  return (
    <div>
      <div
        style={{ backgroundImage: `url("${hero.heroImage}")` }}
        className="fluid-container hero_image"
      >
        <div className="">
          <h1 className="font-weight-bold">{hero.heroHeadline}</h1>
          <p className="font-weight-normal">{hero.heroSubHeadline}</p>
          <a className="btn btn-outline-dark" href={hero.heroPath}>
            {hero.heroButton}
          </a>
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
              productPath={"/view-product" + i.productSku}
              productBgIsLight={i.productBgIsLight}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { HomeContent };

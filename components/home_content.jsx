import { useHover } from "../utils/helpers";

const ProductCard = (props) => {
  const [hoverRef, isHovered] = useHover();

  let dom = {};

  props.productBgIsLight
    ? (dom = {
        title: "font-weight-bold"
      })
    : (dom = {
        title: "text-light font-weight-bold"
      });

  return (
    <section className="product_card_v m-1">
      <a className="no-link" href={props.productPath} ref={hoverRef}>       
        <div
          className="product_image"
          style={{ backgroundImage: `url("${props.imagePath}")` }}
        >
          <h2 className={dom.title}>{props.productTitle}</h2>
        </div>       
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

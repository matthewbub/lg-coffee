import { Header, Footer } from '../components/layout.jsx';
import StickyTopNavbar from '../components/StickyTopNavbar';

const ProductCard = (props) => {
  let dom = {};

  props.productBgIsLight
    ? (dom = {
        title: 'font-weight-bold',
      })
    : (dom = {
        title: 'text-light font-weight-bold',
      });

  return (
    <section className='product_card_v m-1'>
      <a className='no-link' href={props.productPath}>
        <div
          className='product_image'
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
  const hero = props.data.hero;
  return (
    <div>
      <div
        style={{ backgroundImage: `url("${hero.heroImage}")` }}
        className='fluid-container hero_image'
      >
        <div className=''>
          <h1 className='font-weight-bold'>{hero.heroHeadline}</h1>
          <p className='font-weight-normal'>{hero.heroSubHeadline}</p>
          <a className='btn btn-outline-dark' href={hero.heroPath}>
            {hero.heroButton}
          </a>
        </div>
      </div>

      <div className='container'>
        <div className='d-flex products_wrapper'>
          {products.map((i) => (
            <ProductCard
              key={i.productSku}
              imagePath={i.imagePath}
              imagePathHovered={i.imagePathHovered}
              productTitle={i.productTitle}
              productDescription={i.productDescription}
              productPrice={i.productPrice}
              productPath={'/view-product' + i.productSku}
              productBgIsLight={i.productBgIsLight}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage = ({ data }) => {
  return (
    <>
      <StickyTopNavbar store={data.store} navigation={data.navigation} />
      <HomeContent data={data} />
      <Footer data={data} />
    </>
  );
};

export default HomePage;

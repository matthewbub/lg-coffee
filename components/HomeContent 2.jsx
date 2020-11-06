import { useHover } from '../utils/helpers';

const ProductCard = (props) => {
  const [hoverRef, isHovered] = useHover();

  let dom = {};

  !props.lightText
    ? (dom = {
        title: 'product_title',
        hoverTitle: 'big_title',
        text: 'product_text',
        price: 'product_text align-self-end product_price',
      })
    : (dom = {
        title: 'text-light product_title',
        hoverTitle: 'text-light big_title',
        text: 'text-light product_text',
        price: 'text-light product_text align-self-end product_price',
      });

  return (
    <section className='product_card_v m-1'>
      <a className='no-link' href='/' ref={hoverRef}>
        {isHovered ? (
          <div
            className='product_image'
            style={{ backgroundImage: `url("${props.imagePathHovered}")` }}
          >
            <div className='holdstill'>
              <h3 className={dom.title}>{props.productTitle}</h3>
              <p className={dom.text}>{props.productDescription}</p>
            </div>
            <h4 className={dom.price}>{props.productPrice}</h4>
          </div>
        ) : (
          <div
            className='product_image'
            style={{ backgroundImage: `url("${props.imagePath}")` }}
          >
            <h3 className={dom.title}>{props.productTitle}</h3>
          </div>
        )}
      </a>
    </section>
  );
};

const HomeContent = () => {
  return (
    <div>
      <div className='fluid-container position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light'>
        <div className='col-md-5 p-lg-5 mx-auto my-5'>
          <h1 className='display-4 font-weight-normal'>Punny headline</h1>
          <p className='lead font-weight-normal'>
            And an even wittier subheading to boot. Jumpstart your marketing
            efforts with this example based on Apple’s marketing pages.
          </p>
          <a className='btn btn-outline-secondary' href='#'>
            Coming soon
          </a>
        </div>
        <div className='product-device shadow-sm d-none d-md-block' />
        <div className='product-device product-device-2 shadow-sm d-none d-md-block' />
      </div>

      <div className='container'>
        <div className='d-flex'>
          <ProductCard
            imagePath='/front_page_bunns@2x.png'
            imagePathHovered='/front_page_bunns_hover@2x.png'
            productTitle='Bunns In The Void'
            productDescription='Holographic Sticker, This thing is bad ass'
            productPrice='$2.87'
          />
          <ProductCard
            imagePath='/front_page_lady@2x.png'
            imagePathHovered='/front_page_lady_hover@2x.png'
            productTitle='Lady In The Void'
            lightText={true}
            productDescription='Holographic Sticker, This thing is bad ass'
            productPrice='$2.87'
          />
        </div>
      </div>
    </div>
  );
};

export { HomeContent };

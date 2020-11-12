import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = ({ logo, navigation }) => (
  <Navbar
    collapseOnSelect
    expand="lg"
    bg="dark"
    variant="dark"
    style={{ backgroundColor: '#0c0b07 !important' }}
  >
    <Navbar.Brand href="/">
      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        {navigation.map((i) => (
          <Nav.Link href={i.href}>{i.name}</Nav.Link>
        ))}
      </Nav>
      <Nav>
        <Nav.Link href="/view-cart/checkout">Cart</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Navigation.propTypes = {
  logo: PropTypes.string.isRequired,
  navigation: PropTypes.arrayOf().isRequired,
};

const ThreeCardComponent = ({ threeCardComponent }) => (!Array.isArray(threeCardComponent) ? (
  <div>Error loading data. Check the docs.</div>
  ) : (
    <Container>
      <Row className="my-5">
        {threeCardComponent.map((i) => (
          <Col sm={12} md={4}>
            <div className="d-flex flex-column align-items-center text-center p-3">
              <img
                src={i.image}
                alt={i.heading}
                style={{
                  height: '150px',
                  width: '150px',
                }}
              />
              <h3 className="text-light my-4">{i.heading}</h3>
              <p className="text-light">{i.subheading}</p>
              <Link href={i.href}>
                <span
                  className="text-light"
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  Learn More
                </span>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  ));

ThreeCardComponent.propTypes = {
  threeCardComponent: PropTypes.arrayOf({}).isRequired,
};

const TextBlockComponent = ({ heading, subheading }) => (
  <Container>
    <Row>
      <Col xs={12} className="d-flex flex-column align-items-center my-5">
        <h2 className="text-light my-4">{heading}</h2>
        <p className="text-light">{subheading}</p>
      </Col>
    </Row>
  </Container>
);

TextBlockComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
};

const Hero = ({
 image, heading, subheading, button, href,
}) => (
  <Container fluid>
    <div
      style={{ backgroundImage: `url("${image}")` }}
      className="fluid-container hero_image"
    >
      <div className="">
        <h1 className="font-weight-bold">{heading}</h1>
        <p className="font-weight-normal">{subheading}</p>
        <Link className="btn btn-outline-dark" href={href}>
          <button className="btn btn-outline-dark" type="button">
            {button}
          </button>
        </Link>
      </div>
    </div>
  </Container>
);

Hero.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

const ProductRowComponet = ({ heading, products }) => (
  <Container>
    <Row className="mt-5 mb-3">
      <h2 className="text-light">{heading}</h2>
    </Row>
    <Row className="mb-5">
      {products.map((i) => (
        <Col
          key={i.sku}
          lg={{ span: 4, offset: 0 }}
          md={{ span: 4, offset: 1 }}
          sm={{ span: 8, offset: 2 }}
        >
          <Link href={`/${i.sku}`}>
            <div className="my-5">
              <div style={{ cursor: 'pointer' }}>
                <img src={i.images[0]} alt={i.name} />
                <h5 className="text-light mt-3 mb-1">{i.name}</h5>
                <h6 className="text-muted">
                  $
                  {i.price}
                  {' '}
                  USD
                </h6>
              </div>
            </div>
          </Link>
        </Col>
      ))}
    </Row>
  </Container>
);

ProductRowComponet.propTypes = {
  heading: PropTypes.string.isRequired,
  products: PropTypes.arrayOf({
    images: PropTypes.arrayOf().isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

const Preview = ({ data }) => (
  <>
    <Navigation
      logo={data.navigationComponent.logo}
      navigation={data.navigation}
    />
    <Hero
      image={data.heroComponent.image}
      heading={data.heroComponent.heading}
      subheading={data.heroComponent.subheading}
      button={data.heroComponent.button}
      href={data.heroComponent.href}
    />
    <ThreeCardComponent threeCardComponent={data.threeCardComponent} />
    <TextBlockComponent
      heading={data.textBlockComponent.heading}
      subheading={data.textBlockComponent.subheading}
    />
    <ProductRowComponet
      heading={data.productsRowComponent.heading}
      products={data.productsRowComponent.products}
    />
  </>
);

Preview.propTypes = {
  data: PropTypes.shape({
    navigation: PropTypes.arrayOf().isRequired,
    navigationComponent: PropTypes.shape({
      logo: PropTypes.string.isRequired,
    }).isRequired,
    heroComponent: PropTypes.shape({
      image: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      subheading: PropTypes.string.isRequired,
      button: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }),
    threeCardComponent: PropTypes.shape({}).isRequired,
    textBlockComponent: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      subheading: PropTypes.string.isRequired,
    }).isRequired,
    productsRowComponent: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      products: PropTypes.arrayOf().isRequired,
    }),
  }).isRequired,
};

export default Preview;

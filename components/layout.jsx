const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {props.logo_img ? (
        <a className="navbar-brand" href="/">
          <img
            src="/docs/4.5/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
            loading="lazy"
          />
          Bootstrap
        </a>
      ) : (
        <a className="navbar-brand" href="#">
          Navbar
        </a>
      )}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Pricing
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="container mt-5 mb-4">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Collections
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            FAQ
          </a>
        </li>
      </ul>
      <div className="d-flex justify-content-center">
        <span style={{ fontSize: ".75em" }}>{year}</span>
      </div>
    </div>
  );
};

const Container = (props) => {
  return <div className="container"> {props.children} </div>;
};

const FormContainer = (props) => {
  return (
    <Container>
      <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-6 col-md-7 col-sm-9 col-xs-12">
          <div className="card p-4 m-4">{props.children}</div>
        </div>
      </div>
    </Container>
  );
};

export { Header, Footer, Container, FormContainer };

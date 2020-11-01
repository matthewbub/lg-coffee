const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {props.logo_img ? (
        <a className="navbar-brand" href="#">
          <img
            src="/docs/4.5/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
            loading="lazy"
          />
          Bootstrap
        </a>
      ) : (
        <a class="navbar-brand" href="#">
          Navbar
        </a>
      )}
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
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
    <div className="container">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            Contact
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Collections
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
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

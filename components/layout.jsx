import { useRouter } from "next/router";

const NavLink = (props) => {
  let current;
  props.current === props.path ? (current = "active") : null;

  return (
    <li className={current + " nav-item"}>
      <a className="nav-link" style={props.style} href={props.path}>
        {props.title}{" "}
        <span className="sr-only"> {current ? "(current)" : null}</span>
      </a>
    </li>
  );
};

const Header = (props) => {
  const router = useRouter();
  console.log(router.query);

  const { store } = props.data;
  const style = store.nav.style;
  return (
    <nav style={style.nav} className="navbar navbar-expand-lg sticky-top">
      {store.logo ? (
        <a className="navbar-brand text-light" href="/">
          <img
            src={store.logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
            loading="lazy"
          />
          {}
        </a>
      ) : (
        <a className="navbar-brand text-light" href="#">
          {store.storeName}
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
          {store.nav.links.map((i) => (
            <NavLink
              current={props.current}
              title={i.title}
              path={i.path}
              style={style.link}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

const Footer = (props) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="container mt-5 mb-4 dark_mode">
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
  return <div className="container dark_mode"> {props.children} </div>;
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

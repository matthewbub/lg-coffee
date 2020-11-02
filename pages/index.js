import { HomeContent } from "../components/home_content";

import { Header, Footer } from "../components/layout.jsx";

const HomePage = (props) => {
  return (
    <main>
      <Header data={props.data} current={"/"} />
      <HomeContent data={props.data} />
      <Footer data={props.data} />
    </main>
  );
};

export default HomePage;

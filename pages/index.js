import { useState } from "react";
import { HomeContent } from "../components/HomeContent";
import {
  Header,
  Footer,
  Container,
  FormContainer,
} from "../components/layout.jsx";

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

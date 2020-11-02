import { useState } from "react";
import { HomeContent } from "../components/HomeContent";
import {
  Header,
  Footer,
  Container,
  FormContainer,
} from "../components/layout.jsx";

const HomePage = () => {
  return (
    <main>
      <Header />
      <HomeContent />
      <Footer />
    </main>
  );
};

export default HomePage;

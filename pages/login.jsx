import { LogInForm } from "../components/LogInForm";
import { Header, Footer, FormContainer } from "../components/layout";

const LoginPage = () => {
  return (
    <>
      <Header />
      <FormContainer>
        <LogInForm />
      </FormContainer>
      <Footer />
    </>
  );
};

export default LoginPage;

import { LogInForm } from "../components/log_in_form.jsx";
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

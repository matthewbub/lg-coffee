import { SignInForm, SignUpForm } from "../components/forms.jsx";
import { CreateProductForm } from "../components/CreateProductForm";
import { AccountSettingsForm } from "../components/AccountSettingsForm";
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
      <div className="container">
        <h1>Forms</h1>
      </div>
      <FormContainer>
        <SignInForm />
      </FormContainer>

      <FormContainer>
        <SignUpForm />
      </FormContainer>

      <FormContainer>
        <CreateProductForm />
      </FormContainer>

      <FormContainer>
        <AccountSettingsForm />
      </FormContainer>

      <Footer />
    </main>
  );
};

export default HomePage;

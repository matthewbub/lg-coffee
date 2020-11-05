import { Header, Footer, FormContainer } from "../components/layout";
import CheckoutForm from "../components/checkout_form";
import Wrapper from "../utils/wrapper";
import Router from "next/router";

const Checkout = (props) => {
  return (
    <Wrapper>
      <Header data={props.data} />
      <FormContainer>
        <CheckoutForm
          price={287}
          onSuccessfulCheckout={() => Router.push("/order-confirmation")}
        />
      </FormContainer>
      <Footer data={props.data} />
    </Wrapper>
  );
};

export default Checkout;

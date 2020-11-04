import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

const Wrapper = ({ children }) => {
  return <Elements stripe={stripePromise}> {children} </Elements>;
};
export default Wrapper;

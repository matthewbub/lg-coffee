import { Header, Footer } from "../components/layout";
import { cn } from "../utils/classNames";
const dark = cn.darkForm;

const LoginComponent = () => {
  const handleFormSubmit = async (ev) => {
    ev.preventDefault();

    const credentials = {
      email: ev.target.email.value,
      password: ev.target.password.value,
    };

    console.log(credentials);
  };

  return (
    <div className={dark.formWrapper}>
      <form onSubmit={handleFormSubmit} className={dark.form}>
        <h1 className={dark.h1}>Login</h1>
        <label htmlFor="email" className={dark.label}>
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className={dark.input}
        />

        <label htmlFor="password" className={dark.label}>
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className={dark.input}
        />

        <button className={dark.button} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

const LoginPage = ({ data }) => {
  return (
    <>
      <Header data={data} />
      <LoginComponent />
      <Footer data={data} />
    </>
  );
};

export default LoginPage;

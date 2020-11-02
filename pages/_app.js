import { useState } from "react";
import "../styles/default_text.css";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [data, setData] = useState();

  const url = "/api/data";
  const options = { method: "GET" };

  fetch(url, options)
    .then((response) => response.json())
    .then((responseJson) => {
      setData(responseJson);
    })
    .catch((error) => console.error(error));

  if (data !== undefined) {
    return <Component data={data} {...pageProps} />;
  } else {
    return <div>Loading...</div>;
  }
}

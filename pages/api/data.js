import { data } from "../../utils/data";

export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  // fake db call
  setTimeout(() => {
    res.end(JSON.stringify(data));
  }, 1000);
}

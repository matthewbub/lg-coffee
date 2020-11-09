/* eslint-disable no-console */
export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  console.log(req);
  return res.end(JSON.stringify('good'));
}

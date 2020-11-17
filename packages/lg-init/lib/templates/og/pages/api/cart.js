/* eslint-disable no-console */
export default function handler(req, res) {
  const {
    query: { sku, qty },
    method,
  } = req;

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ sku, qty });
      break;
    case 'PUT':
      // Update or create data in your database
      res.status(200).send({ req });
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

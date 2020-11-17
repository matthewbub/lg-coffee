export default function userHandler(req, res) {
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
      res.status(200).json({ sku, qty });
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

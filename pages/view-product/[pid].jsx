import { useRouter } from "next/router";

const ViewProduct = (props) => {
  const router = useRouter();
  const { pid } = router.query;

  const products = props.data.products;
  let product;
  for (let i = 0; i < products.length; i++) {
    Object.keys(products[i]).map((y) =>
      products[i].productSku === "/" + pid
        ? (product = products[i])
        : "Whoops Looks like that product isn't avaiable right now."
    );
  }

  console.log(product);

  return <p>Post: {pid}</p>;
};

export default ViewProduct;

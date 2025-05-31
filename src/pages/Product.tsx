//React Router
import { useLoaderData } from "react-router"
//Loaders
import { productLoader } from "../loaders/products"

export default function Product() {
  const { product } = useLoaderData()
  //console.log(product)

  return (
    <>
      <h1>{product.title}</h1>
    </>
  )
}

async function loader({ params: { policyLink }, request: { signal } }: any) {
  const product = productLoader(policyLink, { signal })

  return { product: await product }
}

export const productsListRoute = {
  loader,
  element: <Product />,
}

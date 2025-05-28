//React Router
import { useLoaderData } from "react-router"
//Components
import ComparisonCard from "../components/ComparisonCard"
//Loaders
import { comparisonProductsLoader } from "../loaders/comparison-products"
//Types
import type { CompProductProps } from "../types"

export default function Comparison() {
  const { products } = useLoaderData()
  //console.log(products)

  return (
    <>
      <h1>Comparison Page</h1>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.length > 0 ? (
          products.map((product: CompProductProps) => {
            return <ComparisonCard key={product.id} {...product} />
          })
        ) : (
          <div>Sorry, but there isn't anything matching. Please try again.</div>
        )}
      </div>

      {/* <p>{JSON.stringify(products)}</p> */}
    </>
  )
}

async function loader() {
  const products = comparisonProductsLoader()

  return { products: await products }
}

export const comparisonListRoute = {
  loader,
  element: <Comparison />,
}

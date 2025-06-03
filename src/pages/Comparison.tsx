import { useEffect, useRef } from "react"
//React Router
import { Form, useLoaderData } from "react-router"
//Components
import ComparisonCard from "../components/ComparisonCard"
//Loaders
import { comparisonProductsLoader } from "../loaders/comparison-products"
//Types
import type { CompProductProps } from "../types"

export default function Comparison() {
  //Array to map through to generate the "productCategory" <select> options (checks against the "coverState.cover" value above)
  const typeOfCoverArr: string[] = ["Plumbing", "Heating", "Electrics"]

  const {
    products,
    searchParams: { productCategory },
  } = useLoaderData()

  const productRef = useRef<HTMLSelectElement | null>(null)

  useEffect(() => {
    productRef.current = productCategory || ""
  }, [productCategory])

  return (
    <>
      <h1>Comparison Page</h1>

      <Form>
        <div className="row g-4">
          <div className="form-group">
            <label className="form-label" htmlFor="productCategory">
              Filter
            </label>
            <select className="form-select" id="productCategory" name="productCategory" ref={productRef} defaultValue={productCategory}>
              {typeOfCoverArr.map((cover, index) => {
                return (
                  <option key={index} value={cover}>
                    {cover}
                  </option>
                )
              })}
            </select>
            <button className="btn btn-primary">Filter</button>
          </div>
        </div>
      </Form>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.length > 0 ? (
          products.map((product: CompProductProps) => {
            return <ComparisonCard key={product.id} {...product} />
          })
        ) : (
          <div>Sorry, but there isn't anything matching. Please try again.</div>
        )}
      </div>
    </>
  )
}

async function loader({ request: { signal, url } }: any) {
  const searchParams = new URL(url).searchParams
  const productCategory = searchParams.get("productCategory")
  const filterParams = { productCategory: productCategory }

  const products = comparisonProductsLoader({ signal, params: filterParams })

  return { products: await products, searchParams: { productCategory } }
}

export const comparisonListRoute = {
  loader,
  element: <Comparison />,
}

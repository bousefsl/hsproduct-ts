import { useEffect, useRef } from "react"
//React Router
import { Form, useLoaderData } from "react-router"
//Components
import LandlordComparisonCard from "../components/LandlordComparisonCard"
//Loaders
import { landlordComparisonProductsLoader } from "../loaders/comparison-products"
//Types
import type { LandlordCompProductProps } from "../types"

export default function LandlordComparison() {
  const {
    landlordproducts,
    searchParams: { productCategory },
  } = useLoaderData()

  const productRef = useRef<HTMLSelectElement | null>(null)

  useEffect(() => {
    productRef.current = productCategory || ""
  }, [productCategory])

  return (
    <>
      <h1>Landlord Comparison</h1>

      <Form>
        <div className="row g-4">
          <div className="form-group">
            <label className="form-label" htmlFor="productCategory">
              Filter
            </label>
            <select className="form-select" id="productCategory" name="productCategory" ref={productRef}>
              <option>Plumbing</option>
              <option>Heating</option>
              <option>Electrics</option>
            </select>
            <button className="btn btn-primary">Filter</button>
          </div>
        </div>
      </Form>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {landlordproducts.length > 0 ? (
          landlordproducts.map((landlordproduct: LandlordCompProductProps) => {
            return <LandlordComparisonCard key={landlordproduct.id} {...landlordproduct} />
          })
        ) : (
          <div>Sorry, but there isn't anything matching. Please try again.</div>
        )}
      </div>

      {/* <p>{JSON.stringify(landlordproducts)}</p> */}
    </>
  )
}

async function loader({ request: { signal, url } }: any) {
  const searchParams = new URL(url).searchParams
  const productCategory = searchParams.get("productCategory")
  const filterParams = { productCategory: productCategory }

  const landlordproducts = landlordComparisonProductsLoader({ signal, params: filterParams })

  return { landlordproducts: await landlordproducts, searchParams: { productCategory } }
}

export const landlordComparisonRoute = {
  loader,
  element: <LandlordComparison />,
}

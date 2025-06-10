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
  //Array to map through to generate the "productCategory" <select> options (checks against the "coverState.cover" value above)
  const typeOfCoverArr: string[] = ["Plumbing", "Heating", "Electrics"]

  const {
    landlordproducts,
    searchParams: { productCategory },
  } = useLoaderData()

  const productRef = useRef<HTMLSelectElement | null>(null)

  useEffect(() => {
    productRef.current = productCategory || ""
  }, [productCategory])

  return (
    <section className="section-spacer section-top">
      <div className="container-xl">
        <div className="row">
          <div className="col">
            <h1>Landlord Comparison</h1>

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

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
              {landlordproducts.length > 0 ? (
                landlordproducts.map((landlordproduct: LandlordCompProductProps) => {
                  return <LandlordComparisonCard key={landlordproduct.id} {...landlordproduct} />
                })
              ) : (
                <div>Sorry, but there isn't anything matching. Please try again.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
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

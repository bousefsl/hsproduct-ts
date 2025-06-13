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
    <section className="section-spacer section-top">
      <div className="container-xl">
        <div className="row">
          <div className="col">
            <h1>Compare {productCategory.toLowerCase()} cover</h1>

            <Form className="my-5">
              <div className="row">
                <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                  <h2 className="h5 homeserve-medium fw-bold">Not the right cover type? Try another below...</h2>
                  <div className="input-group mb-3">
                    <select className="form-select" id="productCategory" name="productCategory" ref={productRef} defaultValue={productCategory} aria-label="Change your cover type" aria-describedby="filter-button">
                      {typeOfCoverArr.map((cover, index) => {
                        return (
                          <option key={index} value={cover}>
                            {cover}
                          </option>
                        )
                      })}
                    </select>
                    <button className="btn btn-primary" id="filter-button">
                      Filter
                    </button>
                  </div>
                </div>
              </div>
            </Form>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
              {products.length > 0 ? (
                products.map((product: CompProductProps) => {
                  return <ComparisonCard key={product.id} {...product} />
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

  const products = comparisonProductsLoader({ signal, params: filterParams })

  return { products: await products, searchParams: { productCategory } }
}

export const comparisonListRoute = {
  loader,
  element: <Comparison />,
}

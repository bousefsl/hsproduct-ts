import { useEffect, useRef } from "react"
//React Router
import { Form, useLoaderData } from "react-router"
//Components
import LandlordComparisonCard from "../components/LandlordComparisonCard"
import MetaTags from "../components/global/MetaTags"
import { Button } from "../components/global/CTAs"
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
            <h1>{landlordproducts.length > 0 ? `Compare landlord's ${landlordproducts[0].productCategory.toLowerCase()} cover` : "Oops! Something went wrong..."}</h1>
            {/* SEO */}
            <MetaTags title={landlordproducts.length > 0 ? `HS Landlord's Comparison | ${landlordproducts[0].productCategory}` : "HS Landlord's Comparison | Error"} keywords="lorem, ipsum, sit, dolor, amet" description="Lorem ipsum sit dolor amet" name="Scott" />
            {/* SEO -- End */}

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
                    <Button id="filter-button">Filter</Button>
                  </div>
                </div>
              </div>
            </Form>

            <div className="row g-4">
              {landlordproducts.length > 0 ? (
                landlordproducts.map((landlordproduct: LandlordCompProductProps) => {
                  return <LandlordComparisonCard key={landlordproduct.id} {...landlordproduct} />
                })
              ) : (
                <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                  <div className="text-center lead fw-bold">
                    <i className="icon-hs-cross-outline icon-hs-2x text-danger me-2" aria-hidden="true"></i>
                    Sorry, but there isn't anything matching. Please try again.
                  </div>
                </div>
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

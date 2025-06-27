import { Suspense } from "react"
//React Router
import { Await, Form, useLoaderData } from "react-router"
//Components
import ComparisonCard from "../components/ComparisonCard"
import MetaTags from "../components/global/MetaTags"
import { Button } from "../components/global/CTAs"
import { SkeletonComparisonCard, SkeletonList } from "../components/global/Skeleton"
//Loaders
import { comparisonProductsLoader } from "../loaders/comparison-products"
//Types
import type { CompProductProps } from "../types"
//Styles
import "../assets/css/skeleton.css"

export default function Comparison() {
  //Array to map through to generate the "productCategory" <select> options (checks against the "coverState.cover" value above)
  const typeOfCoverArr: string[] = ["Plumbing", "Heating", "Electrics"]

  const {
    productsPromise,
    searchParams: { productCategory },
  } = useLoaderData()

  //Loading State
  // const { state } = useNavigation()
  // const isLoading = state

  return (
    <section className="section-spacer section-spacer-top">
      <div className="container-xl">
        <div className="row">
          <div className="col">
            <Suspense fallback={<h1 className="text-center">Please wait...</h1>}>
              <Await resolve={productsPromise}>{(products) => (products.length > 0 ? <h1>{`Compare ${products[0].productCategory.toLowerCase()} cover`}</h1> : <h1>Oops! Something went wrong...</h1>)}</Await>
            </Suspense>

            {/* SEO */}
            <Suspense>
              <Await resolve={productsPromise}>{(products) => <MetaTags title={products.length > 0 ? `HS Comparison | ${products[0].productCategory}` : "HS Comparison | Error"} keywords="lorem, ipsum, sit, dolor, amet" description="Lorem ipsum sit dolor amet" name="Scott" />}</Await>
            </Suspense>
            {/* SEO -- End */}

            <Form className="my-5">
              <div className="row">
                <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                  <h2 className="h5 fw-bold">Not the right cover type? Try another below...</h2>
                  <div className="input-group mb-3">
                    <Suspense
                      fallback={
                        <select className="form-select" id="productCategory" name="productCategory" disabled>
                          <option value="">Loading...</option>
                        </select>
                      }
                    >
                      <Await resolve={productsPromise}>
                        <select className="form-select" id="productCategory" name="productCategory" defaultValue={productCategory || ""} aria-label="Change your cover type" aria-describedby="filter-button">
                          {typeOfCoverArr.map((cover: string, index) => {
                            return (
                              <option key={index} value={cover}>
                                {cover}
                              </option>
                            )
                          })}
                        </select>
                      </Await>
                    </Suspense>
                    <Button id="filter-button">Filter</Button>
                  </div>
                </div>
              </div>
            </Form>

            <div className="row g-4">
              <Suspense
                fallback={
                  <>
                    {/* {isLoading && <div className="mb-2">Loading...</div>} */}
                    <SkeletonList amount={4}>
                      <SkeletonComparisonCard />
                    </SkeletonList>
                  </>
                }
              >
                <Await resolve={productsPromise}>
                  {(products) =>
                    products.length > 0 ? (
                      products.map((product: CompProductProps) => {
                        return <ComparisonCard key={product.id} {...product} />
                      })
                    ) : (
                      <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div className="text-center lead fw-bold">
                          <i className="icon-hs-cross-outline icon-hs-2x text-danger me-2" aria-hidden="true"></i>
                          Sorry, but there isn't anything matching. Please try again.
                        </div>
                      </div>
                    )
                  }
                </Await>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function loader({ request: { signal, url } }: any) {
  const searchParams = new URL(url).searchParams
  const productCategory = searchParams.get("productCategory")
  const filterParams = { productCategory: productCategory }

  const products = comparisonProductsLoader({ signal, params: filterParams })

  return { productsPromise: products, searchParams: { productCategory } }
}

export const comparisonListRoute = {
  loader,
  element: <Comparison />,
}

import { Fragment } from "react/jsx-runtime"
import { useRef } from "react"
//React Router
import { Link } from "react-router"
//Types
import type { ProductProps } from "../types"
//Motion
import { useInView } from "motion/react"

export default function ProductInclusionExclusion(product: ProductProps) {
  //Motion (animation)
  const pieRef = useRef(null)
  const isInView = useInView(pieRef, { once: true, amount: 0 })

  return (
    <div className="product-inclusions-exclusions">
      <section className="section-spacer">
        <div className="container-xl">
          <h2 className="text-center mb-5">This insurance is for</h2>
          <div className="row justify-content-center">
            <div className={`col-md-5 scroll-up-hidden short ${isInView ? "show-element" : ""}`} ref={pieRef}>
              <div className="px-2">
                <ul className="included icons-success">
                  {product.insuranceFor.map((item, index) => {
                    return <li key={index}>{item}</li>
                  })}
                </ul>
              </div>
            </div>
            <div className={`col-md-5 scroll-up-hidden short ${isInView ? "show-element" : ""}`} ref={pieRef}>
              <div>
                <div className="px-2">
                  <ul className="crosses">
                    {product.insuranceNotFor.map((item, index) => {
                      return <li key={index}>{item}</li>
                    })}
                  </ul>
                  <p className="ps-3">
                    {product.insuranceNotForLinkRequired ? (
                      <>
                        For landlords, please visit: <Link to={product.insuranceNotForLink}>Landlord's {product.title}</Link>
                      </>
                    ) : (
                      <Fragment></Fragment>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className={`col-md-5 mb-3 scroll-up-hidden short ${isInView ? "show-element" : ""}`} ref={pieRef}>
              <div className="card h-100">
                <div className="card-header h5 fw-bold py-3">
                  <i className="icon-hs-tick-outline icon-hs-1-5x text-success me-2" aria-hidden="true" />
                  What's covered:
                </div>
                <div className="card-body">
                  <ul>
                    {product.whatsCovered.map((item, index) => {
                      return <li key={index}>{item}</li>
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className={`col-md-5 mb-3 scroll-up-hidden short ${isInView ? "show-element" : ""}`} ref={pieRef}>
              <div className="card h-100">
                <div className="card-header h5 fw-bold py-3">
                  <i className="icon-hs-cross-outline icon-hs-1-5x text-primary me-2" aria-hidden="true" />
                  What isn't covered:
                </div>
                <div className="card-body">
                  <ul>
                    {product.whatsNotCovered.map((item, index) => {
                      return <li key={index}>{item}</li>
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

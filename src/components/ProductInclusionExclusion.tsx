//Types
import type { ProductProps } from "../types"

export default function ProductInclusionExclusion(product: ProductProps) {
  return (
    <div className="product-inclusions-exclusions">
      <section className="section-spacer">
        <h2 className="homeserve-thick text-center mb-5">This insurance is for</h2>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="px-2">
              <ul className="ticks">
                {product.insuranceFor.map((item, index) => {
                  return <li key={index}>{item}</li>
                })}
              </ul>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <div className="px-2">
                <ul className="crosses">
                  {product.insuranceNotFor.map((item, index) => {
                    return <li key={index}>{item}</li>
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5 mb-4 mb-lg-5">
            <div className="card h-100">
              <div className="card-body">
                <ul>
                  {product.whatsCovered.map((item, index) => {
                    return <li key={index}>{item}</li>
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-4 mb-lg-5">
            <div className="card h-100">
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
      </section>
    </div>
  )
}

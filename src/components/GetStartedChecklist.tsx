//Types
import type { ProductProps } from "../types"
//Styles
import classes from "../assets/styles/getstartedchecklist.module.css"

export default function GetStartedChecklist(product: ProductProps) {
  return (
    <div className="get-started bg-light-gray-100">
      <section className="section-spacer py-5">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div>
                <h2 className="text-center mb-5">Let's get started</h2>
                <ul className="mb-4 list-unstyled">
                  <li className="d-flex mb-3">
                    <div className={`${classes["home-bg-marker"]} me-4`} style={{ backgroundImage: `url(/hs-house-bg.svg)` }}>
                      <span className={classes["home-bg-no"]}>1</span>
                    </div>
                    <div>
                      <p className="h4 homeserve-thick mb-1">First, check you're not covered elsewhere</p>
                      <p>This is to make sure you're not paying for cover you don't need.</p>
                    </div>
                  </li>
                  <li className="d-flex mb-3">
                    <div className={`${classes["home-bg-marker"]} me-4`} style={{ backgroundImage: `url(/hs-house-bg.svg)` }}>
                      <span className={classes["home-bg-no"]}>2</span>
                    </div>
                    <div>
                      <p className="h4 homeserve-thick mb-1">Check you're eligible - this cover is for {product.eligibilityOwner} only</p>
                      <p>Cover for {product.eligibilityOwnerPropertyCover} mobile homes, park homes, business premises, council and housing association properties is not included in this policy.</p>
                    </div>
                  </li>
                  <li className="d-flex mb-3">
                    <div className={`${classes["home-bg-marker"]} me-4`} style={{ backgroundImage: `url(/hs-house-bg.svg)` }}>
                      <span className={classes["home-bg-no"]}>3</span>
                    </div>
                    <div>
                      <p className="h4 homeserve-thick mb-1">Don't forget to read the policy documents</p>
                      <p>It's important that you read the Insurance Product Information Document and the Terms and Conditions before taking out the policy.</p>
                    </div>
                  </li>
                </ul>
                <div className="text-center">
                  <button className="btn btn-primary">Apply now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

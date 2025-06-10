//Images
import HSHouseLogoSVG from "../assets/images/hs-house-bg.svg"
//Types
import type { ProductProps } from "../types"

export default function GetStartedChecklist(product: ProductProps) {
  return (
    <div className="get-started">
      <section className="section-spacer">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div>
                <h2 className="text-center mb-5">Let's get started</h2>
                <ul className="mb-4">
                  <li className="d-flex mb-3">
                    <div style={{ backgroundImage: `url(${HSHouseLogoSVG})` }}>
                      <span>1</span>
                    </div>
                    <div>
                      <p className="h4 homeserve-thick mb-1">First, check you're not covered elsewhere</p>
                      <p>This is to make sure you're not paying for cover you don't need.</p>
                    </div>
                  </li>
                  <li className="d-flex mb-3">
                    <div style={{ backgroundImage: `url(${HSHouseLogoSVG})` }}>
                      <span>2</span>
                    </div>
                    <div>
                      <p className="h4 homeserve-thick mb-1">Check you're eligible - this cover is for {product.eligibilityOwner} only</p>
                      <p>Cover for {product.eligibilityOwnerPropertyCover} mobile homes, park homes, business premises, council and housing association properties is not included in this policy.</p>
                    </div>
                  </li>
                  <li className="d-flex mb-3">
                    <div style={{ backgroundImage: `url(${HSHouseLogoSVG})` }}>
                      <span>3</span>
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

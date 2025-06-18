import { Fragment } from "react/jsx-runtime"
//React Router
import { Link } from "react-router"
//Types
import type { ProductProps } from "../types"
//Utilities
import formatCurrency from "../utilities/formatCurrency"
import ButtonLink from "./global/ButtonLink"

export default function ProductHeader(product: ProductProps) {
  //console.log(product)

  return (
    <div className="product-header">
      <section className="section-spacer section-top">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-6">
              <div>
                <h1 className="mb-4">{product.title}</h1>
                <div className="mb-5">
                  {product.productParagraph.map((item, index) => {
                    return (
                      <p key={index} className="col-lg-10 mb-4">
                        {item}
                      </p>
                    )
                  })}
                  <p className="col">
                    <ButtonLink toLink="/">Apply now</ButtonLink>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="product-costing">
                <div className="card text-bg-dark-gray-700 mx-sm-5 mx-md-0 ms-lg-5">
                  {product.hasOffer ? <div className="card-header">{product.hasOfferContent}</div> : <Fragment></Fragment>}
                  <div className="card-body">
                    <div className="d-flex mb-1">
                      <div>
                        <p className="h4 homeserve-medium fw-bold">Monthly cost:</p>
                      </div>
                      <div className="ms-auto">
                        <p className="text-end">
                          <span className="h3 homeserve-medium fw-bold">{formatCurrency(product.monthlyCost)}</span> <br />
                          (in your first year)
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex mb-1">
                      <div>
                        <p className="h5 homeserve-thin fw-bold">Annual price:</p>
                      </div>
                      <div className="ms-auto">
                        <p className="h5 homeserve-thin fw-bold text-end">{formatCurrency(product.annualCost)}</p>
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <div>
                        <p className="h5 homeserve-thin fw-bold">Your excess:</p>
                      </div>
                      <div className="ms-auto">
                        <p className="h5 homeserve-thin fw-bold text-end">{formatCurrency(product.excessCost)}</p>
                      </div>
                    </div>
                    <p className="text-center">
                      <Link className="btn btn-secondary" data-bs-toggle="collapse" to="#smallprintCollapse" role="button" aria-expanded="false" aria-controls="smallprintCollapse">
                        More information
                      </Link>
                    </p>
                    <div className="collapse" id="smallprintCollapse">
                      <p className="text-start">
                        Your price will increase at renewal, but you'll always receive a reminder. If you choose to continue into your second year, the expected price for customers who haven't made a claim is {formatCurrency(product.secondYearMonthlyCost)} a month* ({formatCurrency(product.secondYearAnnualCost)} for the year).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

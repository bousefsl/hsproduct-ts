//React Router
import { Link } from "react-router"
//Types
import type { ProductProps } from "../types"
//Utilities
import formatCurrency from "../utilities/formatCurrency"

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
                <div>
                  {product.productParagraph.map((item, index) => {
                    return (
                      <p key={index} className="col-lg-10 mb-4">
                        {item}
                      </p>
                    )
                  })}
                  <p className="col">
                    <Link to="/" className="btn btn-primary">
                      Apply now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <div className="card text-bg-dark-gray-700 px-sm-2 px-lg-5 ms-lg-5">
                  <div className="card-body text-white text-center">
                    <p>
                      <span className="h1">{formatCurrency(product.monthlyCost)}</span> <br />a month in your first year
                    </p>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <p className="h5 homeserve-medium">
                          Annual price:
                          <br /> {formatCurrency(product.annualCost)}
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="h5 homeserve-medium">
                          Your excess:
                          <br /> {formatCurrency(product.excessCost)}
                        </p>
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

//Types
import type { ProductProps } from "../types"
//Utilities
import formatCurrency from "../utilities/formatCurrency"

export default function ProductHeader(product: ProductProps) {
  //console.log(product)

  return (
    <div className="product-header mt-5">
      <section className="section-spacer mb-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-6">
              <div>
                <h1 className="mb-4">{product.title}</h1>
                <div>
                  {product.productParagraph.map((item, index) => {
                    return <p key={index}>{item}</p>
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <div className="card text-bg-dark px-sm-2 px-lg-5 ms-lg-5">
                  <div className="card-body text-white text-center">
                    <p>
                      <span className="h1">{formatCurrency(product.monthlyCost)}</span> <br />a month in your first year
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <p className="h4 homeserve-medium">Annual price: {formatCurrency(product.annualCost)}</p>
                      </div>
                      <div className="col-lg-6">
                        <p className="h4 homeserve-medium">Your excess: {formatCurrency(product.excessCost)}</p>
                      </div>
                    </div>
                    <p className="text-start">
                      Your price will increase at renewal, but you'll always receive a reminder. If you choose to continue into your second year, the expected price for customers who haven't made a claim is {formatCurrency(product.secondYearMonthlyCost)} a month* ({formatCurrency(product.secondYearAnnualCost)} for the year).
                    </p>
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

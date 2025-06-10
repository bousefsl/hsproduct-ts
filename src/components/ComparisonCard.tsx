import { Fragment } from "react/jsx-runtime"
//Types
import type { CompProductProps } from "../types"
//React Router
import { Link } from "react-router"
//Utilities
import formatCurrency from "../utilities/formatCurrency"

export default function ComparisonCard({ title, monthlyCost, excessCost, inclusions, exclusions, policyLink }: CompProductProps) {
  return (
    <div className="col">
      <div className="card comparison-card h-100">
        <div className="card-header">{title}</div>
        <div className="card-body homeserve-medium">
          <div className="text-center mb-4">
            <div className="h5 fw-bold">{formatCurrency(monthlyCost)} a month</div>
            <div>Excess: £{excessCost}</div>
          </div>
          <div className="policy-attribute-list-wrapper">
            <div>
              <p>This policy covers:</p>
              <ul className="included">
                {inclusions.map((inclusion, index) => {
                  return <li key={index}>{inclusion}</li>
                })}
              </ul>
            </div>
            <div>
              {exclusions.length > 0 ? (
                <Fragment>
                  <hr></hr>
                  <div>
                    <p className="text-gray">Other policies are available which also cover:</p>
                    <ul className="excluded">
                      {exclusions.map((exclusion, index) => {
                        return <li key={index}>{exclusion}</li>
                      })}
                    </ul>
                  </div>
                </Fragment>
              ) : (
                <Fragment></Fragment>
              )}
            </div>
          </div>
          <div className="text-center">
            <Link to={`../products/${policyLink}`} className="btn btn-primary">
              View policy details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

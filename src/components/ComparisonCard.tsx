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
      <div className="card h-100">
        <div className="card-header">{title}</div>
        <div className="card-body">
          <div>{formatCurrency(monthlyCost)} a month</div>
          <div>Excess: £{excessCost}</div>
          <div>
            <p>This policy covers:</p>
            <ul>
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
                  <p>Other policies are available which also cover:</p>
                  <ul>
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

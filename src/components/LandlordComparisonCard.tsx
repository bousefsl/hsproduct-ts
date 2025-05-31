import { Fragment } from "react/jsx-runtime"
//Types
import type { LandlordCompProductProps } from "../types"
//React Router
import { Link } from "react-router"

export default function LandlordComparisonCard({ title, monthlyCost, inclusions, exclusions, policyLink }: LandlordCompProductProps) {
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-header">{title}</div>
        <div className="card-body">
          <div>£{monthlyCost} a month</div>
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

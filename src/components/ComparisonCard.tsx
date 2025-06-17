import { useRef } from "react"
import { Fragment } from "react/jsx-runtime"
//React Router
import { Link } from "react-router"
//Types
import type { CompProductProps } from "../types"
//Utilities
import formatCurrency from "../utilities/formatCurrency"
//Hooks
import { useSyncRefHeight } from "./hooks/useSyncRefHeight"
import { useWindowSize } from "@uidotdev/usehooks" //https://usehooks.com/usewindowsize

export default function ComparisonCard({ title, monthlyCost, excessCost, inclusions, exclusions, policyLink }: CompProductProps) {
  //Set refs to target the elements we want to set at the same heights (to align the comparison cards aesthetically)
  const titleRef = useRef(null)
  const policyInclExclRef = useRef(null)

  //Set a const to use the useWindowSize hook from usehooks.com
  //This is so we can set a dependency for the useSyncRefHeight to run every time the window changes size (reponsive)
  const size = useWindowSize()
  //console.log("size: ", size.width)

  useSyncRefHeight(
    [
      ["title", titleRef],
      ["policyInclExcl", policyInclExclRef],
    ],
    [size.width]
  )

  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card comparison-card h-100">
        <div className="card-header" ref={titleRef}>
          {title}
        </div>
        <div className="card-body homeserve-medium">
          <div className="text-center mb-4">
            <div className="h5 fw-bold">{formatCurrency(monthlyCost)} a month</div>
            <div>Excess: £{excessCost}</div>
          </div>
          <div className="policy-attribute-list-wrapper mb-4" ref={policyInclExclRef}>
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
                    <ul className="excluded mb-0">
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
            <Link to={`../products/${policyLink}`} className="btn btn-secondary">
              View policy details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

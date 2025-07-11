import { useRef } from "react"
import { Fragment } from "react/jsx-runtime"
//Components
import { ButtonLink } from "./global/CTAs"
//Types
import type { LandlordCompProductProps } from "../types"
//Utilities
import formatCurrency from "../utilities/formatCurrency"
//Hooks
import { useSyncRefHeight } from "./hooks/useSyncRefHeight"
import { useWindowSize } from "@uidotdev/usehooks" //https://usehooks.com/usewindowsize

export default function LandlordComparisonCard({ title, monthlyCost, inclusions, exclusions, policyLink }: LandlordCompProductProps) {
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
        <div className="card-body">
          <div className="text-center mb-4">
            <div className="h5 fw-bold">{formatCurrency(monthlyCost)} a month</div>
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
                    <p>Other policies are available which also cover:</p>
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
            <ButtonLink toLink={`../products/${policyLink}`} variant="secondary">
              View policy details
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  )
}

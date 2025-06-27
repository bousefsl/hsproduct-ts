import { Fragment } from "react/jsx-runtime"

type SkeletonListProps = {
  amount: number
  children: React.ReactNode
}

type SkeletonStyleProps = {
  short?: boolean
  inline?: boolean
  centered?: boolean
}

export function Skeleton({ short, inline, centered }: SkeletonStyleProps) {
  return <div className="skeleton" style={{ width: short ? "50%" : undefined, display: inline ? "inline-block" : undefined, margin: centered ? "1rem auto 0rem" : undefined }} />
}

export function SkeletonList({ amount, children }: SkeletonListProps) {
  return (
    <>
      {Array.from({ length: amount }).map((_, index) => {
        return <Fragment key={index}>{children}</Fragment>
      })}
    </>
  )
}

export function SkeletonButton() {
  return <div className="skeleton skeleton-btn" />
}

export function SkeletonComparisonCard() {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card comparison-card h-100">
        <div className="card-header mb-0">
          <div>
            <Skeleton />
            <Skeleton short centered />
          </div>
        </div>
        <div className="card-body">
          <div className="mb-5">
            <Skeleton short centered />
            <Skeleton short centered />
          </div>
          <div className="mb-4">
            <div>
              <Skeleton short />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton short />
            </div>
            <div>
              <hr></hr>
              <div className="mb-3">
                <Skeleton />
                <Skeleton short />
              </div>
              <div>
                <Skeleton />
                <Skeleton />
                <Skeleton short />
              </div>
            </div>
          </div>
          <div className="text-center">
            <SkeletonButton />
          </div>
        </div>
      </div>
    </div>
  )
}

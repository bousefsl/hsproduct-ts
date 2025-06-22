type SmallprintChildrenProps = {
  children: React.ReactNode
}

export function Smallprint({ children }: SmallprintChildrenProps) {
  return (
    <section className="section-spacer">
      <div className="container-xl">
        <div className="row">
          <div className="col">
            <div className="smallprint">{children}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SmallprintTitle({ children }: SmallprintChildrenProps) {
  return <p className="fw-bold mb-2">{children}</p>
}

export function SmallprintBody({ children }: SmallprintChildrenProps) {
  return <p>{children}</p>
}

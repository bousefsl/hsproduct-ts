type CardChildrenProps = {
  children: React.ReactNode
}

type CardProps = CardChildrenProps & {
  otherClasses: string
}

type CardImgProps = {
  imgSrc: string
  imgAlt: string
}

export function Card({ children, otherClasses }: CardProps) {
  return <div className={`card ${otherClasses}`}>{children}</div>
}

export function CardHeader({ children }: CardChildrenProps) {
  return <div className="card-header">{children}</div>
}

export function CardBody({ children }: CardChildrenProps) {
  return <div className="card-body">{children}</div>
}

export function CardImg({ imgSrc, imgAlt }: CardImgProps) {
  return <img src={imgSrc} className="card-img-top" alt={imgAlt} />
}

export function CardTitle({ children, otherClasses }: CardProps) {
  return <div className={`card-title ${otherClasses}`}>{children}</div>
}

export function CardText({ children }: CardChildrenProps) {
  return <div className="card-text">{children}</div>
}

export function CardFooter({ children, otherClasses }: CardProps) {
  return <div className={`card-footer ${otherClasses}`}>{children}</div>
}

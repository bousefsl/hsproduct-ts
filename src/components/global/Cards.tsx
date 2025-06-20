type CardChildrenProps = {
  children: React.ReactNode
}

type CardProps = CardChildrenProps & {
  otherClasses?: string
}

type ScaleBGImgCardProps = CardProps & {
  bgImgStyle: string
}

type CardImgProps = {
  imgSrc: string
  imgAlt: string
}

export function Card({ children, otherClasses = "" }: CardProps) {
  return <div className={`card ${otherClasses}`}>{children}</div>
}

export function CardHeader({ children }: CardChildrenProps) {
  return <div className="card-header">{children}</div>
}

export function CardBody({ children, otherClasses = "" }: CardProps) {
  return <div className={`card-body ${otherClasses}`}>{children}</div>
}

export function CardImg({ imgSrc, imgAlt }: CardImgProps) {
  return <img src={imgSrc} className="card-img-top" alt={imgAlt} />
}

export function CardTitle({ children, otherClasses = "" }: CardProps) {
  return <div className={`card-title ${otherClasses}`}>{children}</div>
}

export function CardText({ children, otherClasses = "" }: CardProps) {
  return <div className={`card-text mb-3 ${otherClasses}`}>{children}</div>
}

export function CardFooter({ children, otherClasses = "" }: CardProps) {
  return <div className={`card-footer ${otherClasses}`}>{children}</div>
}

//Cards with a background image that scales when hovered over
export function ScaleBGImgCardOverlay({ children, otherClasses = "", bgImgStyle }: ScaleBGImgCardProps) {
  return (
    <div className={`scale-bg-img ${bgImgStyle} ${otherClasses}`}>
      <div className="scale-img-gradient">
        <div className="scale-bg-img-overlay">{children}</div>
      </div>
    </div>
  )
}

export function ScaleBGImgCardTitle({ children, otherClasses = "" }: CardProps) {
  return <div className={`card-title text-white h4 fw-bold ${otherClasses}`}>{children}</div>
}

export function ScaleBGImgCardText({ children, otherClasses = "" }: CardProps) {
  return <div className={`card-text text-white ${otherClasses}`}>{children}</div>
}

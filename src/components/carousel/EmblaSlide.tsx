//React Router
import { Link } from "react-router"
//Components
import ButtonLink from "../global/ButtonLink"

type SlideProps = {
  slideImg: string
  slideLink: string
  btnText: string
  altText: string
  children: React.ReactNode
}

type SlideMessageProps = {
  children: React.ReactNode
}

export function SlideWrapper({ slideImg, slideLink, btnText, altText, children }: SlideProps) {
  return (
    <div className="embla__slide">
      <div className="embla-img">
        <Link to={slideLink}>
          <img src={slideImg} alt={altText} />
        </Link>
      </div>
      {children}
      <div>
        <ButtonLink toLink={slideLink} variant="secondary">
          {btnText}
        </ButtonLink>
      </div>
    </div>
  )
}

export function SlideMessage({ children }: SlideMessageProps) {
  return <div className="embla__message">{children}</div>
}

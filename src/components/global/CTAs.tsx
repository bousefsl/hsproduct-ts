//React Router
import { Link } from "react-router"
//Types
import { ButtonLinkProps, ButtonProps, LinkProps } from "../../types"

//Anchor/Text Link
export function Anchor({ linkTo, linkTarget, linkRel, linkClass, children }: LinkProps) {
  return (
    <Link to={linkTo} target={linkTarget} rel={linkRel} className={linkClass}>
      {children}
      {/* Accessibility: Adds icon at the end to signify it opens in a new window plus text to be read by screenreader */}
      {linkTarget === "_blank" ? (
        <>
          <i aria-hidden="true" className="icon-hs-open-in-new ms-1 d-inline-block"></i>
          <span className="visually-hidden"> opens a new window</span>
        </>
      ) : (
        <></>
      )}
    </Link>
  )
}

//Link (Button appearance)
export function ButtonLink({ children, toLink, variant = "primary", otherClasses = "", linkTarget, linkRel }: ButtonLinkProps) {
  return (
    <Link to={toLink} className={`btn btn-${variant} ${otherClasses}`} target={linkTarget} rel={linkRel}>
      {children}
    </Link>
  )
}

//Button
export function Button({ children, variant = "primary", otherClasses = "", ...props }: ButtonProps) {
  return (
    <button className={`btn btn-${variant} ${otherClasses}`} {...props}>
      {children}
    </button>
  )
}

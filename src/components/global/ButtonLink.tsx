//React Router
import { Link } from "react-router"

type ButtonLinkProps = {
  children: React.ReactNode
  toLink: string
  variant?: string
  id?: string
  otherClasses?: string
  linkTarget?: string
  linkRel?: string //"noreferrer"
}

export default function ButtonLink({ children, toLink, variant = "primary", otherClasses = "", linkTarget, linkRel }: ButtonLinkProps) {
  return (
    <Link to={toLink} className={`btn btn-${variant} ${otherClasses}`} target={linkTarget} rel={linkRel}>
      {children}
    </Link>
  )
}

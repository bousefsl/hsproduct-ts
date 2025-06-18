//React Router
import { Link } from "react-router"

type ButtonLinkProps = {
  children: React.ReactNode
  toLink: string
  variant?: string
  id?: string
  linkTarget?: string
  linkRel?: string //"noreferrer"
}

export default function ButtonLink({ children, toLink, variant = "primary", linkTarget, linkRel }: ButtonLinkProps) {
  return (
    <Link to={toLink} className={`btn btn-${variant}`} target={linkTarget} rel={linkRel}>
      {children}
    </Link>
  )
}

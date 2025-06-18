import { Link } from "react-router"

type LinkProps = {
  linkTo: string
  linkTarget?: string
  linkRel?: string //"noreferrer"
  linkClass?: string
  children: React.ReactNode
}

export default function Anchor({ linkTo, linkTarget, linkRel, linkClass, children }: LinkProps) {
  return (
    <Link to={linkTo} target={linkTarget} rel={linkRel} className={linkClass}>
      {children}
    </Link>
  )
}

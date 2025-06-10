import { NavLink } from "react-router"

type megaMenuNavLinkContentProps = {
  linkTo: string
  linkTitle: string
  linkContent: string
}

export default function MegaMenuNavLink({ linkTo, linkTitle, linkContent }: megaMenuNavLinkContentProps) {
  return (
    <NavLink to={linkTo} className="dropdown-item py-2">
      <span className="fw-bold">{linkTitle}</span>
      <br />
      <span className="fw-medium text-gray">
        <small>{linkContent}</small>
      </span>
    </NavLink>
  )
}

//React router
import { Link } from "react-router"
//Components
import NavBar from "./NavBar"
import { Anchor, Button, ButtonLink } from "./CTAs"
//Styles
import classes from "../../assets/styles/header.module.css"
//Images
import HSLogoSVG from "../../assets/images/homeserve-logo.svg"
import HSLogoWEBP from "../../assets/images/homeserve-logo.webp"
import HSLogoPNG from "../../assets/images/homeserve-logo.png"

export default function Header() {
  return (
    <header>
      <div id="header-wrapper" className={classes["header-wrapper"]}>
        <div className={classes["head-area"] + " py-3 d-none d-lg-block"}>
          <div className="container-xl d-flex">
            <div className="me-auto">
              <Link to="/" className={classes["navbar-brand-size"] + " navbar-brand"}>
                <picture>
                  <source media="(min-width:992px)" srcSet={HSLogoSVG} type="image/svg+xml" />
                  <source media="(min-width:992px)" srcSet={HSLogoWEBP} type="image/webp" />
                  <img src={HSLogoPNG} alt="HomeServe Logo" />
                </picture>
              </Link>
            </div>
            <div className="p-2 d-flex">
              <ButtonLink toLink="#" variant="primary" otherClasses="me-2">
                Make a claim
              </ButtonLink>
              <div className="dropdown">
                <Button id="LoginRegister" variant="secondary" otherClasses="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Log in or register">
                  <i aria-hidden="true" className="icon-hs-customer icon-hs-1-25x text-dark-gray-600"></i> Account
                </Button>
                <ul className="dropdown-menu">
                  <li>
                    <Anchor linkTo="#" linkClass="dropdown-item">
                      Log in
                    </Anchor>
                  </li>
                  <li>
                    <Anchor linkTo="#" linkClass="dropdown-item">
                      Register
                    </Anchor>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <NavBar />
      </div>
    </header>
  )
}

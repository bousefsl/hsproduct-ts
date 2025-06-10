//React router
import { Link } from "react-router"
//Components
import NavBar from "./NavBar"
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
            <div className="p-2"></div>
          </div>
        </div>
        <NavBar />
      </div>
    </header>
  )
}

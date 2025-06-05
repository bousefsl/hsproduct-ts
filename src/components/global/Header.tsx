//React router
import { Link, NavLink } from "react-router"
//Styles
import classes from "../../assets/styles/header.module.css"
//Images
import HSLogoSVG from "../../assets/images/homeserve-logo.svg"
import HSLogoWEBP from "../../assets/images/homeserve-logo.webp"
import HSLogoPNG from "../../assets/images/homeserve-logo.png"
import HSInlineLogoSVG from "../../assets/images/homeserve-logo-inline.svg"
import HSInlineLogoWEBP from "../../assets/images/homeserve-logo-inline.webp"
import HSInlineLogoPNG from "../../assets/images/homeserve-logo-inline.png"
import HSHouseLogoSVG from "../../assets/images/hs-house-white.svg"
import HSHouseLogoWEBP from "../../assets/images/hs-house-white.webp"
import HSHouseLogoPNG from "../../assets/images/hs-house-white.png"

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
        <div className="nav-area">
          <nav className="navbar navbar-expand-lg bg-primary" aria-label="Main navigation">
            <div className="container-xl">
              <Link to="/" className={classes["navbar-nav-size"] + " navbar-brand"} aria-current="page">
                <picture>
                  <source media="(max-width:991px)" srcSet={HSInlineLogoSVG} type="image/svg+xml" />
                  <source media="(max-width:991px)" srcSet={HSInlineLogoWEBP} type="image/webp" />
                  <img src={HSInlineLogoPNG} alt="HomeServe Logo" className="d-inline-block d-lg-none" />
                </picture>
                <picture>
                  <source media="(min-width:992px)" srcSet={HSHouseLogoSVG} type="image/svg+xml" />
                  <source media="(min-width:992px)" srcSet={HSHouseLogoWEBP} type="image/webp" />
                  <img src={HSHouseLogoPNG} alt="HomeServe Logo" className="d-none d-lg-inline-block" />
                </picture>
              </Link>
              <button className="navbar-toggler collapsed" type="button" data-bs-toggle="offcanvas" data-bs-target="#hsNavbar" aria-controls="hsNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>
              <div className="offcanvas-lg offcanvas-start flex-grow-1" id="hsNavbar">
                <ul className="navbar-nav me-0 me-lg-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <NavLink to="#" className={`nav-link dropdown-toggle ${classes["hs-nav-link"]}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Home cover &amp; services
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to="#" className="dropdown-item">
                          Link 1
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#" className="dropdown-item">
                          Link 2
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#" className="dropdown-item">
                          Link 3
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink to="#" className={`nav-link dropdown-toggle ${classes["hs-nav-link"]}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Help &amp; Advice
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to="#" className="dropdown-item">
                          Action
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#" className="dropdown-item">
                          Another action
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#" className="dropdown-item">
                          Something else here
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink to="#" className={`nav-link dropdown-toggle ${classes["hs-nav-link"]}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      About HomeServe
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to="#" className="dropdown-item">
                          Action
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#" className="dropdown-item">
                          Another action
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#" className="dropdown-item">
                          Something else here
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink to="#" className={`nav-link ${classes["hs-nav-link"]}`}>
                      Help &amp; advice
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

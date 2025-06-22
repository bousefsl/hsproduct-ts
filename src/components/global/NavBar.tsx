//React Router
import { Link, NavLink } from "react-router"
//Styles
import classes from "../../assets/styles/header.module.css"
//Images
import HSInlineLogoSVG from "../../assets/images/homeserve-logo-inline.svg"
import HSInlineLogoWEBP from "../../assets/images/homeserve-logo-inline.webp"
import HSInlineLogoPNG from "../../assets/images/homeserve-logo-inline.png"
import HSHouseLogoSVG from "../../assets/images/hs-house-white.svg"
import HSHouseLogoWEBP from "../../assets/images/hs-house-white.webp"
import HSHouseLogoPNG from "../../assets/images/hs-house-white.png"
import MegaMenuNavLink from "./MegaMenuNavLink"

export default function NavBar() {
  const coverServicesNav = [
    {
      id: 1,
      title: "Home Cover",
      items: [
        { linkTo: "#", linkTitle: "Boiler cover", linkContent: "Lorem ipsum sit amet" },
        { linkTo: "#", linkTitle: "Plumbing & Drainage cover", linkContent: "Lorem ipsum sit amet" },
        { linkTo: "#", linkTitle: "Electrics cover", linkContent: "Lorem ipsum dolor sit amet" },
        { linkTo: "#", linkTitle: "Landlord cover", linkContent: "Lorem ipsum dolor sit amet" },
        { linkTo: "#", linkTitle: "Home accident cover", linkContent: "Lorem ipsum dolor sit amet" },
      ],
    },
    {
      id: 2,
      title: "Home Installation",
      items: [
        { linkTo: "#", linkTitle: "Boiler installation", linkContent: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do" },
        { linkTo: "#", linkTitle: "EV charger installation", linkContent: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do" },
      ],
    },
    {
      id: 3,
      title: "Service plans",
      items: [
        { linkTo: "#", linkTitle: "Boiler service plans", linkContent: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do" },
        { linkTo: "#", linkTitle: "Heat pump service plans", linkContent: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do" },
      ],
    },
  ]

  const helpNav = [
    {
      id: 1,
      title: "Home emergency?",
      items: [
        { linkTo: "#", linkTitle: "Make a claim", linkContent: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do" },
        { linkTo: "#", linkTitle: "Not a customer? Need a repair?", linkContent: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum" },
      ],
    },
    {
      id: 2,
      title: "Need information?",
      items: [
        { linkTo: "#", linkTitle: "Help centre", linkContent: "Tempus leo eu aenean sed diam urna tempor pulvinar" },
        { linkTo: "#", linkTitle: "FAQs", linkContent: "Quisque faucibus ex sapien vitae pellentesque sem placerat" },
        { linkTo: "#", linkTitle: "Knowledge hub", linkContent: "Ad litora torquent per conubia nostra inceptos himenaeos" },
      ],
    },
  ]

  return (
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
            <li className="nav-item dropdown is-megamenu">
              <Link to="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Home cover &amp; services
              </Link>
              <div className="dropdown-menu megamenu-wrapper">
                <div className="container-xl">
                  <div className="row">
                    <div className="col">
                      <div className="megamenu">
                        <div className="row d-flex justify-content-center px-1 p-lg-3">
                          <div className="col-lg-3 d-none d-lg-block h-auto">
                            <div className="p-3 bg-light-gray-100 h-100 rounded">
                              <p className="h2">We're a trusted name in home cover &amp; services</p>
                              <p className="text-gray">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                              <p>
                                <Link to="#" className="btn btn-secondary">
                                  Our services
                                </Link>
                              </p>
                            </div>
                          </div>
                          {coverServicesNav.map((navItem) => {
                            return (
                              <div key={navItem.id} className="col-lg-3">
                                <div className="mb-4 mb-lg-3">
                                  <p className="h6 homeserve-thick navlink-title">{navItem.title}</p>
                                  <div className="nav-link-group">
                                    {navItem.items.map((item, index) => {
                                      return <MegaMenuNavLink key={index} {...item} />
                                    })}
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown is-megamenu">
              <Link to="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Help &amp; Support
              </Link>
              <div className="dropdown-menu megamenu-wrapper">
                <div className="container-sm">
                  <div className="row">
                    <div className="col">
                      <div className="megamenu-sm">
                        <div className="row d-flex justify-content-center px-1 p-lg-3">
                          <div className="col-lg-4 d-none d-lg-block h-auto">
                            <div className="p-3 bg-light-gray-100 h-100 rounded">
                              <p className="h2">
                                Need help? <br />
                                Let us turn that frown upside-down...
                              </p>
                              <p className="text-gray">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                          </div>
                          {helpNav.map((navItem) => {
                            return (
                              <div key={navItem.id} className="col-lg-4">
                                <div className="mb-4 mb-lg-3">
                                  <p className="h6 homeserve-thick navlink-title">{navItem.title}</p>
                                  <div className="nav-link-group">
                                    {navItem.items.map((item, index) => {
                                      return <MegaMenuNavLink key={index} {...item} />
                                    })}
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <NavLink to="#" className="nav-link">
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

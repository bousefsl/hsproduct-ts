//React Router
import { Link } from "react-router"
//Components
import Anchor from "./Anchor"
//Styles
import classes from "../../assets/styles/footer.module.css"
//Images
import HSHouseLogoSVG from "../../assets/images/hs-house.svg"
import HSHouseLogoWEBP from "../../assets/images/hs-house.webp"
import HSHouseLogoPNG from "../../assets/images/hs-house.png"

export default function Footer() {
  const footerNav = [
    {
      title: "Products and Services",
      items: [
        { linkTo: "#", linkTarget: "", linkRel: "", linkClass: "", linkContent: "What we do" },
        { linkTo: "#", linkTarget: "", linkRel: "", linkClass: "", linkContent: "Plumbing and Drainage Cover" },
        { linkTo: "#", linkTarget: "", linkRel: "", linkClass: "", linkContent: "Gas Boiler and Heating Cover" },
        { linkTo: "#", linkTarget: "", linkRel: "", linkClass: "", linkContent: "Landlord Cover" },
        { linkTo: "#", linkTarget: "", linkRel: "", linkClass: "", linkContent: "New Boilers" },
      ],
    },
    {
      title: "About Us",
      items: [
        { linkTo: "#", linkTarget: "", linkRel: "", linkClass: "", linkContent: "About HomeServe" },
        { linkTo: "#", linkTarget: "", linkRel: "", linkClass: "", linkContent: "Careers at HomeServe" },
        { linkTo: "#", linkTarget: "", linkRel: "", linkClass: "", linkContent: "Become a Tradesperson" },
        { linkTo: "#", linkTarget: "", linkRel: "", linkClass: "", linkContent: "Media Centre" },
      ],
    },
    {
      title: "More from HomeServe",
      items: [
        { linkTo: "#", linkTarget: "", linkRel: "", linkClass: "", linkContent: "Frequently Asked Questions" },
        { linkTo: "#", linkTarget: "", linkRel: "", linkClass: "", linkContent: "Knowledge Hub" },
        { linkTo: "#", linkTarget: "", linkRel: "", linkClass: "", linkContent: "Contact Us" },
      ],
    },
  ]

  const footerInlineNav = [
    { linkTo: "#", linkTarget: "", linkRel: "", linkClass: "", linkContent: "Privacy Policy" },
    { linkTo: "#", linkTarget: "", linkRel: "", linkClass: "", linkContent: "Cookies Policy" },
    { linkTo: "#", linkTarget: "", linkRel: "", linkClass: "", linkContent: "Terms of Use" },
    { linkTo: "#", linkTarget: "", linkRel: "", linkClass: "", linkContent: "Anti-Slavery Statement" },
    { linkTo: "#", linkTarget: "", linkRel: "", linkClass: "", linkContent: "Gender Pay Information" },
  ]

  return (
    <footer>
      <div className={`bg-dark text-white ${classes["footer-wrapper"]}`}>
        <div className="container-xl">
          <div className={`${classes["hs-logo-wrapper"]} mb-5`}>
            <picture>
              <source srcSet={HSHouseLogoSVG} type="image/svg+xml" />
              <source srcSet={HSHouseLogoWEBP} type="image/webp" />
              <img src={HSHouseLogoPNG} alt="HomeServe Logo" />
            </picture>
          </div>
          <div className="d-flex flex-row flex-wrap mb-4">
            {footerNav.map((section, index) => {
              return (
                <div key={index} className={`${classes["footer-links-column-wrapper"]} d-flex flex-column mb-3`}>
                  <a className={`${classes["footer-links-header"]} lead homeserve-thick`} data-bs-toggle="collapse" href={`#collapseExample${index}`} role="button" aria-expanded="false" aria-controls={`collapseExample${index}`}>
                    {section.title}
                  </a>
                  <ul className={`${classes["footer-links-column"]} collapse`} id={`collapseExample${index}`}>
                    {section.items.map((item, index) => {
                      return (
                        <li key={index}>
                          <Anchor {...item}>{item.linkContent}</Anchor>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}

            <div className={`${classes["footer-links-column-wrapper"]} flex-grow-1 mb-3`}>
              <ul className={`${classes["footer-links-column"]} ${classes["social-links"]} d-flex flex-row`}>
                <li>
                  <Link to="#" target="_blank" rel="noopener">
                    <i aria-hidden="true" className="icon-hs-facebook-circle icon-hs-2-5x" />
                  </Link>
                </li>
                <li>
                  <Link to="#" target="_blank" rel="noopener">
                    <i aria-hidden="true" className="icon-hs-twitter-circle icon-hs-2-5x" />
                  </Link>
                </li>
                <li>
                  <Link to="#" target="_blank" rel="noopener">
                    <i aria-hidden="true" className="icon-hs-youtube-circle icon-hs-2-5x" />
                  </Link>
                </li>
                <li>
                  <Link to="#" target="_blank" rel="noopener">
                    <i aria-hidden="true" className="icon-hs-instagram icon-hs-2-5x" />
                  </Link>
                </li>
                <li>
                  <Link to="#" target="_blank" rel="noopener">
                    <i aria-hidden="true" className="icon-hs-linked-in icon-hs-2-5x" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={classes["footer-inline-links"]}>
            <ul className={`${classes["footer-links-column"]} d-flex flex-column flex-md-row pb-5`}>
              {footerInlineNav.map((item, index) => {
                return (
                  <li key={index}>
                    <Anchor {...item}>{item.linkContent}</Anchor>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div>
          <hr className={classes["red-line"]} />
        </div>

        <div className={classes["footer-base-content"]}>
          <div className="container-xl">
            <span>&copy; {`HomeServe Membership Limited ${new Date().getFullYear()}`}</span>
          </div>
        </div>

        <div className={`${classes["footer-baseline"]} bg-light text-dark`}>
          <div className="container-xl">
            <p>HomeServe is a trading name of HomeServe Membership Limited. Authorised and regulated by the Financial Conduct Authority for its general insurance activities. Registered in England and Wales, number 2770612. Registered office: Cable Drive, Walsall, WS2 7BN. VAT registration number GB 559669669.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { useRef } from "react"
//Components
import { ButtonLink } from "./CTAs"
//Styles
import classes from "../../assets/styles/whychooseus.module.css"
//Images
import WrenchImg from "../../assets/images/wrench.svg"
import SafeHandsImg from "../../assets/images/house-safe-hands.svg"
import RadiatorImg from "../../assets/images/radiator.svg"
import PhoneImg from "../../assets/images/phone.svg"
import RosetteImg from "../../assets/images/rosette.svg"
import WhyChooseUsListItem from "./WhyChooseUsListItem"
//Motion
import { useInView } from "motion/react"

export default function WhyChooseUs() {
  const wcuContent = [
    {
      id: 1,
      iconImg: WrenchImg,
      iconImgAlt: "Lorem ipsum",
      listContent: "Parts, labour and VAT included within cover limits",
    },
    {
      id: 2,
      iconImg: SafeHandsImg,
      iconImgAlt: "Lorem ipsum",
      listContent: "Our Home Experts are always on hand to help",
    },
    {
      id: 3,
      iconImg: RadiatorImg,
      iconImgAlt: "Lorem ipsum",
      listContent: "12 month guarantee on all gas repairs",
    },
    {
      id: 4,
      iconImg: PhoneImg,
      iconImgAlt: "Lorem ipsum",
      listContent: "24/7 support - we're here for you 365 days a year",
    },
    {
      id: 5,
      iconImg: RosetteImg,
      iconImgAlt: "Lorem ipsum",
      listContent: "We always aim to fix your problem first time",
    },
  ]

  //Motion (animation)
  const wcuHeaderRef = useRef(null)
  const ref = useRef(null)
  const isInView = useInView(wcuHeaderRef, { once: true, amount: 0 })
  const isListItemInView = useInView(ref, { once: true, amount: 0 })

  return (
    <div className="why-choose-us">
      <section className="section-spacer bg-white pb-4">
        <div className={`${classes["wcu-wrapper"]} pt-5`}>
          <div className="container-xl">
            <div className="d-flex flex-column flex-lg-row">
              <div className={`d-flex align-items-center scroll-ltor-hidden ${classes["wcu-header"]} ${isInView ? "show-element" : ""}`} ref={wcuHeaderRef}>
                <div className="mb-5">
                  <h2 className="h1">Why choose us?</h2>
                  <p className="mb-4">Whether it's 24/7 home emergency cover, a one-off repair, or new boiler, you can trust we'll take care of it.</p>
                  <div className="d-grid gap-2 d-md-block">
                    <ButtonLink toLink="#" otherClasses="me-md-2">
                      View cover
                    </ButtonLink>
                    <ButtonLink toLink="#" variant="secondary">
                      View service plans
                    </ButtonLink>
                  </div>
                </div>
              </div>
              <div className={classes["wcu-list"]}>
                <ul className="p-0 mb-5">
                  {wcuContent.map((item) => {
                    return (
                      <span key={item.id} className={`fade-in-hidden ${isListItemInView ? "show-element" : ""}`} ref={ref}>
                        <WhyChooseUsListItem {...item} />
                      </span>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

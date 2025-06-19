import React from "react"
//Embla Carousel
import useEmblaCarousel from "embla-carousel-react"
import { EmblaOptionsType } from "embla-carousel"
import { DotButton, useDotButton } from "./EmblaCarouselDotButton"
import { PrevButton, NextButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons"

//Images
import PlumbingImg from "../../assets/images/slider-plumbing-drainage.jpg"
import BoilerImg from "../../assets/images/slider-heating.jpg"
import ElectricsImg from "../../assets/images/slider-electrics.jpg"
import LandlordsImg from "../../assets/images/slider-landlord.jpg"
import HeatPumpImg from "../../assets/images/slider-heat-pump.jpg"
import NewBoilerImg from "../../assets/images/slider-new-boiler.jpg"
import { SlideMessage, SlideWrapper } from "./EmblaSlide"

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const slideInfo = [
  {
    id: 1,
    slideImg: PlumbingImg,
    slideLink: "/products/plumbing-drainage-plus-cover",
    btnText: "View cover",
    altText: "Plumbing and drainage cover now from £1 a month",
    message: (
      <p>
        Plumbing and drainage cover <span className="text-info">now from £1 a month</span>
      </p>
    ),
  },
  {
    id: 2,
    slideImg: BoilerImg,
    slideLink: "/products/gas-boiler-cover-service",
    btnText: "View cover",
    altText: "Boiler and heating cover from £10 a month",
    message: (
      <p>
        Boiler and heating cover <span className="text-info">from &pound;10 a month</span>
      </p>
    ),
  },
  {
    id: 3,
    slideImg: ElectricsImg,
    slideLink: "/products/electrics-cover",
    btnText: "View cover",
    altText: "Electrics cover from £3 a month",
    message: (
      <p>
        Electrics cover <span className="text-info">from &pound;3 a month</span>
      </p>
    ),
  },
  {
    id: 4,
    slideImg: LandlordsImg,
    slideLink: "/products/landlords-plumbing-drainage-plus-cover",
    btnText: "View cover",
    altText: "Cover for landlords now from £1 a month",
    message: (
      <p>
        Cover for landlords <span className="text-info">now from £1 a month</span>
      </p>
    ),
  },
  {
    id: 5,
    slideImg: HeatPumpImg,
    slideLink: "#",
    btnText: "View service plans",
    altText: "Heat Pump Service plans",
    message: <p>Heat Pump Service plans</p>,
  },
  {
    id: 6,
    slideImg: NewBoilerImg,
    slideLink: "#",
    btnText: "Get a new boiler",
    altText: "New boilers installed next day with BOXT",
    message: <p>New boilers installed next day with BOXT</p>,
  },
  {
    id: 7,
    slideImg: ElectricsImg,
    slideLink: "/products/electrics-cover",
    btnText: "View cover",
    altText: "Electrics cover from £3 a month",
    message: (
      <p>
        Electrics cover <span className="text-info">from &pound;3 a month</span>
      </p>
    ),
  },
]

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slideInfo.map((item) => {
            return (
              <SlideWrapper key={item.id} {...item}>
                <SlideMessage>{item.message}</SlideMessage>
              </SlideWrapper>
            )
          })}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton key={index} onClick={() => onDotButtonClick(index)} className={"embla__dot".concat(index === selectedIndex ? " embla__dot--selected" : "")} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel

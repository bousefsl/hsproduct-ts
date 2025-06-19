//Components
import Anchor from "./global/Anchor"
import { Card, CardBody, CardFooter, CardImg, CardTitle } from "./global/Cards"
//Images
import OverflowPipeImg from "../assets/images/leaking-overflow-pipe.jpg"
import BlockedToiletImg from "../assets/images/blocked-toilet.jpg"
import OutsideDrainImg from "../assets/images/blocked-outside-drain.jpg"
import BoilerProblemsImg from "../assets/images/common-boiler-problems.jpg"

export default function DiyAdvice() {
  const diyCards = [
    {
      cardImg: OverflowPipeImg,
      cardBodyContent: "Plumbing advice • Liam Sharkey",
      cardTitleContent: "How to stop your overflow pipe leaking",
      cardFooterContent: "24 Jan 2020 | 10 minutes",
    },
    {
      cardImg: BlockedToiletImg,
      cardBodyContent: "Plumbing advice • Chris Houghton",
      cardTitleContent: "How to unblock a toilet",
      cardFooterContent: "12 Apr 2017 | 8 minutes",
    },
    {
      cardImg: BoilerProblemsImg,
      cardBodyContent: "Boiler advice • Yasmin",
      cardTitleContent: "10 common boiler problems",
      cardFooterContent: "21 Apr 2024 | 7 minutes",
    },
    {
      cardImg: OutsideDrainImg,
      cardBodyContent: "Plumbing advice • Liam Sharkey",
      cardTitleContent: "How to stop your overflow pipe leaking",
      cardFooterContent: "19 Mar 2021 | 7 minutes",
    },
  ]
  return (
    <div className="diy-hacks">
      <section className="section-spacer">
        <div className="container-xl">
          <div className="row">
            <div className="col">
              <h2 className="text-center">DIY advice and hacks articles</h2>
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                  <p className="homeserve-medium text-start text-md-center mb-5">
                    With <Anchor linkTo="#">Knowledge Hub</Anchor>, whether it's home maintenance, help and guidance or even DIY tips, we've got everything you need to take on those smaller jobs at home.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
            {diyCards.map((card) => {
              return (
                <div className="col">
                  <Card otherClasses="h-100">
                    <CardImg imgSrc={card.cardImg} imgAlt="" />
                    <CardBody>
                      <p>
                        <Anchor linkTo="#" linkClass="fw-bold">
                          {card.cardBodyContent}
                        </Anchor>
                      </p>
                      <CardTitle otherClasses="fw-bold">{card.cardTitleContent}</CardTitle>
                    </CardBody>
                    <CardFooter otherClasses="fw-bold">{card.cardFooterContent}</CardFooter>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

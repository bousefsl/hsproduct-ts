//Components
import { Card, CardBody, CardFooter, CardImg, CardText, CardTitle, ScaleBGImgCardOverlay, ScaleBGImgCardText, ScaleBGImgCardTitle } from "./Cards"
import { Anchor, ButtonLink } from "./CTAs"
//Styles
import classes from "../../assets/styles/ourservices.module.css"
//Images
import ServicesHeatPumpImg from "../../assets/images/services-heat-pump.jpg"
import ServicesRepairsImg from "../../assets/images/services-one-off-repair.jpg"

export default function OurServices() {
  return (
    <div className="our-services">
      <section className="section-spacer">
        <div className={classes["os-wrapper"]}>
          <div className="container-xl">
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <div className="d-flex align-items-center h-100">
                  <div>
                    <h2 className="h1">Our Services</h2>
                    <p className="mb-4">Augue tamquam recteque ex mea. Nec summo albucius euripidis id. Tota conceptam referrentur mea at, sea graeco utroque at.</p>
                    <ButtonLink toLink="#" variant="secondary" otherClasses="mb-3">
                      View service plans
                    </ButtonLink>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <Card otherClasses="scale-bg-img-card">
                  <Anchor linkTo="#" linkClass="scale-bg-img-link animated-arrow-link">
                    <ScaleBGImgCardOverlay bgImgStyle={classes["os-bg-img"]} otherClasses="bottom">
                      <ScaleBGImgCardTitle>Need a new boiler?</ScaleBGImgCardTitle>
                      <ScaleBGImgCardText>
                        <p>We're working together with BOXT to ensure you get the best boiler for your home.</p>
                        <p className="mb-0">
                          Get your new boiler quote <i aria-hidden="true" className="icon-hs-arrow-forward" />
                        </p>
                      </ScaleBGImgCardText>
                    </ScaleBGImgCardOverlay>
                  </Anchor>
                </Card>
              </div>
              <div className="col-sm-12 col-lg-4 mt-4 mt-lg-0">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <Card otherClasses="card-transparent">
                      <Anchor linkTo="#" linkClass="mb-3">
                        <CardImg imgSrc={ServicesHeatPumpImg} imgAlt="Heat Pump Image" />
                      </Anchor>
                      <CardBody otherClasses="text-white px-0">
                        <CardTitle otherClasses="lead fw-bold">Heat pump service plans</CardTitle>
                        <CardText>
                          <p>Air source heat pump service from a qualified engineer.</p>
                        </CardText>
                      </CardBody>
                      <CardFooter otherClasses="px-0">
                        <Anchor linkTo="#" linkClass="text-white animated-arrow-link">
                          View our plans <i aria-hidden="true" className="icon-hs-arrow-forward" />
                        </Anchor>
                      </CardFooter>
                    </Card>
                  </div>
                  <div className="col-12 col-sm-6">
                    <Card otherClasses="card-transparent">
                      <Anchor linkTo="#" linkClass="mb-3">
                        <CardImg imgSrc={ServicesRepairsImg} imgAlt="Repairs Image" />
                      </Anchor>
                      <CardBody otherClasses="text-white px-0">
                        <CardTitle otherClasses="lead fw-bold">Do you need a one-off repair?</CardTitle>
                        <CardText>
                          <p>Our team of engineers are on hand, ready to help fix a range of issues.</p>
                        </CardText>
                      </CardBody>
                      <CardFooter otherClasses="px-0">
                        <Anchor linkTo="#" linkClass="text-white animated-arrow-link">
                          View our plans <i aria-hidden="true" className="icon-hs-arrow-forward" />
                        </Anchor>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

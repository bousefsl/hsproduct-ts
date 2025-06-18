//Components
import ProductFinder from "./ProductFinder"
import ButtonLink from "./global/ButtonLink"
//Styles
import classes from "../assets/styles/homehero.module.css"
//Images
import HeroImg from "../assets/images/hero.jpg"

export default function HomeHeroBanner() {
  return (
    <div className="hero">
      <section className="section-spacer">
        <div className={classes["hero-bg"]} style={{ backgroundImage: `url(${HeroImg})` }}>
          <div className="container-xl py-5">
            <div className="row">
              <div className="col-12 col-sm-8 col-md-6">
                <div className={classes["hero-content"]}>
                  <div className={`${classes["sales-msg"]} mb-4`}>
                    <span className="h4 homeserve-medium">Limited offer</span>
                  </div>
                  <h1 className={classes["hero-title"]}>
                    Expert plumbing cover from &pound;1 a month<sup>*</sup>
                  </h1>
                  <p className="homeserve-medium">Lorem ipsum dolor sit amet, eu munere scripta mea, has ne mucius everti integre.</p>
                  <div className="d-grid d-md-inline-block gap-2 col-10 col-sm-8 col-md-auto mx-auto ms-sm-0 mb-4">
                    <ButtonLink toLink="/products/plumbing-drainage-plus-cover">Get plumbing cover</ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductFinder />
      </section>
    </div>
  )
}

//Embla Carousel
import EmblaCarousel from "../components/carousel/EmblaCarousel"
import { EmblaOptionsType } from "embla-carousel"
//Styles
import "../assets/css/embla.css"

const OPTIONS: EmblaOptionsType = { align: "center", dragFree: true, loop: true }
const SLIDE_COUNT = 7
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function ProductsServices() {
  return (
    <div className="products-services">
      <section className="section-spacer">
        <div className="container-xl">
          <div className="row">
            <div className="col">
              <h2 className="text-center">Our products and services</h2>
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                  <p className="text-start text-md-center mb-5">Vim te porro labores maluisset, id possim equidem detracto has. Per ne nisl exerci ornatus, eu semper sanctus duo. Eos inani lucilius partiendo ut, ea ius error minimum fierent.</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

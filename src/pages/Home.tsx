//Components
import MetaTags from "../components/global/MetaTags"
import WhyChooseUs from "../components/global/WhyChooseUs"
import HomeHeroBanner from "../components/HomeHeroBanner"
import ProductsServices from "../components/ProductsServices"

export default function Home() {
  return (
    <>
      {/* SEO */}
      <MetaTags title="Demo project with React & Typescript" keywords="lorem, ipsum, sit, dolor, amet" description="Lorem ipsum sit dolor amet" name="Scott" />
      {/* SEO -- End */}
      <HomeHeroBanner />
      <ProductsServices />
      <WhyChooseUs />
    </>
  )
}

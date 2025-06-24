//Components
import MetaTags from "../components/global/MetaTags"
import HomeHeroBanner from "../components/HomeHeroBanner"
import ProductsServices from "../components/ProductsServices"
import WhyChooseUs from "../components/global/WhyChooseUs"
import OurServices from "../components/global/OurServices"
import DiyAdvice from "../components/DiyAdvice"
import { Smallprint, SmallprintBody } from "../components/global/Smallprint"

export default function Home() {
  return (
    <>
      {/* SEO */}
      <MetaTags title="Demo project with React & Typescript" keywords="lorem, ipsum, sit, dolor, amet" description="Lorem ipsum sit dolor amet" name="Scott" />
      {/* SEO -- End */}
      <HomeHeroBanner />
      <ProductsServices />
      <WhyChooseUs />
      <OurServices />
      <DiyAdvice />
      <Smallprint>
        <SmallprintBody>* Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit labore, blanditiis assumenda doloremque, dignissimos officia id omnis cum sapiente in illo ipsum delectus dicta accusantium aspernatur culpa numquam sunt aliquid.</SmallprintBody>
      </Smallprint>
    </>
  )
}

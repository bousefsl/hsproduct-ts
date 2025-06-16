//Components
import MetaTags from "../components/global/MetaTags"
import ProductFinder from "../components/ProductFinder"

export default function Home() {
  return (
    <>
      <MetaTags title="Demo project with React & Typescript" keywords="lorem, ipsum, sit, dolor, amet" description="Lorem ipsum sit dolor amet" name="Scott" />
      <ProductFinder />
    </>
  )
}

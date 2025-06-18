//Components
import MetaTags from "../components/global/MetaTags"
import HomeHeroBanner from "../components/HomeHeroBanner"

export default function Home() {
  return (
    <>
      {/* SEO */}
      <MetaTags title="Demo project with React & Typescript" keywords="lorem, ipsum, sit, dolor, amet" description="Lorem ipsum sit dolor amet" name="Scott" />
      {/* SEO -- End */}
      <HomeHeroBanner />
    </>
  )
}

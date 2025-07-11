//React Router
import { useLoaderData } from "react-router"
//Loaders
import { productLoader } from "../loaders/products"
//Components
import ProductHeader from "../components/ProductHeader"
import ProductInclusionExclusion from "../components/ProductInclusionExclusion"
import GetStartedChecklist from "../components/GetStartedChecklist"
import FAQs from "../components/FAQs"
import MetaTags from "../components/global/MetaTags"

export default function Product() {
  const { product } = useLoaderData()

  return (
    <>
      <MetaTags title={`HS Insurance | ${product.title}`} keywords="lorem, ipsum, sit, dolor, amet" description="Lorem ipsum sit dolor amet" name="Scott" />
      <ProductHeader {...product} />
      <ProductInclusionExclusion {...product} />
      <GetStartedChecklist {...product} />
      <FAQs {...product} />
    </>
  )
}

async function loader({ params: { policyLink }, request: { signal } }: any) {
  const product = productLoader(policyLink, { signal })

  return { product: await product }
}

export const productsListRoute = {
  loader,
  element: <Product />,
}

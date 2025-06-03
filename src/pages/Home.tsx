//React Router
import { Link } from "react-router"
import ProductFinder from "../components/ProductFinder"

export default function Home() {
  return (
    <>
      <h1 className="text-secondary bg-primary">Homepage</h1>
      <p>
        <Link to={`comparison?productCategory=Plumbing`}>Comparison</Link>
      </p>
      <p>
        <Link to={`landlord-comparison?productCategory=Plumbing`}>Landlord Comparison</Link>
      </p>
      <ProductFinder />
    </>
  )
}

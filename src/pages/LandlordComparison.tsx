//React Router
import { useLoaderData } from "react-router"
//Components
import LandlordComparisonCard from "../components/LandlordComparisonCard"
//Loaders
import { landlordComparisonProductsLoader } from "../loaders/comparison-products"
//Types
import type { LandlordCompProductProps } from "../types"

export default function LandlordComparison() {
  const { landlordproducts } = useLoaderData()

  return (
    <>
      <h1>Landlord Comparison</h1>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {landlordproducts.length > 0 ? (
          landlordproducts.map((landlordproduct: LandlordCompProductProps) => {
            return <LandlordComparisonCard key={landlordproduct.id} {...landlordproduct} />
          })
        ) : (
          <div>Sorry, but there isn't anything matching. Please try again.</div>
        )}
      </div>

      {/* <p>{JSON.stringify(landlordproducts)}</p> */}
    </>
  )
}

async function loader() {
  const landlordproducts = landlordComparisonProductsLoader()

  return { landlordproducts: await landlordproducts }
}

export const landlordComparisonRoute = {
  loader,
  element: <LandlordComparison />,
}

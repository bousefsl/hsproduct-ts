//React Router
import { Link } from "react-router"

export default function Home() {
  return (
    <>
      <h1 className="text-secondary bg-primary">Homepage</h1>
      <Link to={`comparison?query=&category=plumbing`}>Comparison</Link>
    </>
  )
}

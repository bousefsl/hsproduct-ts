//React Router
import { Link, useNavigate } from "react-router"
//Components
import MetaTags from "../components/global/MetaTags"

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <section className="section-spacer section-spacer-top">
      <div className="container-xl">
        <div className="row">
          <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <div className="text-start text-xl-center mb-5">
              <h1 className="mb-5">Oops! Something went wrong...</h1>
              {/* SEO */}
              <MetaTags title="HS Insurance | Error Page" keywords="lorem, ipsum, sit, dolor, amet" description="Lorem ipsum sit dolor amet" name="Scott" />
              {/* SEO -- End */}

              <p className="lead mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptatem. Ab saepe eveniet perspiciatis maiores voluptatem minus aliquam, sequi temporibus, vel.</p>
              <div className="d-grid gap-2 d-md-block">
                <Link to="/" className="btn btn-primary me-md-2">
                  Home
                </Link>
                <Link
                  to={".."}
                  className="btn btn-secondary"
                  onClick={(e) => {
                    e.preventDefault()
                    navigate(-1)
                  }}
                >
                  Go back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

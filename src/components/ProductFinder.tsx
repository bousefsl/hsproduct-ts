import { useState } from "react"
import { useNavigate } from "react-router"
import { Button } from "./global/Button"

export default function ProductFinder() {
  const navigate = useNavigate()

  const [propertyOwnerTypeText, setPropertyOwnerTypeText] = useState<string>("You are a...?")
  const [coverTypeText, setCoverTypeText] = useState<string>("What would you like to cover?")
  const [propertyTypeText, setPropertyTypeText] = useState<string>("For what type of property?")

  const [propertyOwnerSelected, setPropertyOwnerSelected] = useState<boolean>(false)
  const [coverTypeSelected, setCoverTypeSelected] = useState<boolean>(false)
  const [propertyTypeSelected, setPropertyTypeSelected] = useState<boolean>(false)

  const handlePropertyOwnerTypeSelection = (e: React.FormEvent<HTMLButtonElement>) => {
    const elemText = e.currentTarget.innerText
    setPropertyOwnerTypeText(elemText)
    setPropertyOwnerSelected(true)
  }
  const handleCoverTypeSelection = (e: React.FormEvent<HTMLButtonElement>) => {
    const elemText = e.currentTarget.innerText
    setCoverTypeText(elemText)
    setCoverTypeSelected(true)
  }
  const handlePropertyTypeSelection = (e: React.FormEvent<HTMLButtonElement>) => {
    const elemText = e.currentTarget.innerText
    setPropertyTypeText(elemText)
    setPropertyTypeSelected(true)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    //Fetch the cover type selected (e.g. Plumbing, Heating etc)
    let coverType = coverTypeText.toString()
    //Create state to send to the next page via useNavigate
    let coverState = { cover: coverType }

    if (propertyOwnerTypeText.toLowerCase() === "homeowner") {
      navigate(`/comparison?productCategory=${coverTypeText}`, { state: coverState })
    } else {
      //landlord selected
      navigate(`/landlord-comparison?productCategory=${coverTypeText}`, { state: coverState })
    }
  }

  //   useEffect(() => {
  //     console.log(propertyOwnerTypeText, propertyOwnerSelected)
  //     console.log(coverTypeText, coverTypeSelected)
  //     console.log(propertyTypeText, propertyTypeSelected)
  //   }, [propertyOwnerTypeText, coverTypeText, propertyTypeText])

  return (
    <div className="product-finder">
      <div className="container-xl">
        <div className="row">
          <div className="col-12">
            <div className="">
              <p className="h4 homeserve-thick mb-4">Need help? Let's find the right cover for you</p>
              <form className="row gx-3 gy-1" onSubmit={handleSubmit}>
                <div className="col-lg-3">
                  <div className="dropdown">
                    <button id="propertyOwnerType" className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Property owner type">
                      <i aria-hidden="true" className="icon-hs-customer icon-hs-1-5x text-primary"></i> {propertyOwnerTypeText}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <button className="dropdown-item" type="button" onClick={handlePropertyOwnerTypeSelection}>
                          Homeowner
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button" onClick={handlePropertyOwnerTypeSelection}>
                          Landlord
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="dropdown">
                    <button id="coverType" className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Cover type">
                      <i aria-hidden="true" className="icon-hs-secure-shield icon-hs-1-5x text-primary"></i> {coverTypeText}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <button className="dropdown-item" type="button" onClick={handleCoverTypeSelection}>
                          Plumbing
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button" onClick={handleCoverTypeSelection}>
                          Heating
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button" onClick={handleCoverTypeSelection}>
                          Electrics
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="dropdown">
                    <button id="propertyType" className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Property type">
                      <i aria-hidden="true" className="icon-hs-home icon-hs-1-5x text-primary"></i> {propertyTypeText}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <button className="dropdown-item" type="button" onClick={handlePropertyTypeSelection}>
                          House or Bungalow
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button" onClick={handlePropertyTypeSelection}>
                          Flat or Maisonette
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 text-lg-end">
                  <div className="d-grid d-md-inline-block gap-2 col-10 col-sm-8 col-lg-auto mx-auto mb-3 mb-lg-0">
                    <Button variant="secondary" disabled={!(propertyOwnerSelected && coverTypeSelected && propertyTypeSelected)} id="submit-btn">
                      Search cover
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

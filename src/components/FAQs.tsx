import { Fragment } from "react/jsx-runtime"
//Types
import type { ProductProps } from "../types"
//Components
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "./global/Accordion"

export default function FAQs(product: ProductProps) {
  console.log(product)
  return (
    <div className="faqs">
      <section className="section-spacer py-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2 className="text-center mb-5">Frequently asked questions</h2>
            <Accordion id={product.FAQsAccordionID}>
              {product.FAQs.map((item, index) => {
                return (
                  <AccordionItem key={index}>
                    <AccordionHeader header={item.header} expanded={item.expandedonLoad} index={index} />
                    <AccordionBody expanded={item.expandedonLoad} index={index} id={product.FAQsAccordionID}>
                      {item.response.length > 0 ? (
                        item.response.map((resp, index) => {
                          return <p key={index}>{resp}</p>
                        })
                      ) : (
                        <Fragment></Fragment>
                      )}
                      <ul>
                        {item.bulletresponse.length > 0 ? (
                          item.bulletresponse.map((bullet, index) => {
                            return <li key={index}>{bullet}</li>
                          })
                        ) : (
                          <Fragment></Fragment>
                        )}
                      </ul>
                    </AccordionBody>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}

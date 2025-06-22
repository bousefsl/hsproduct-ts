import { Fragment } from "react/jsx-runtime"
//Types
import type { ProductProps } from "../types"
//Components
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "./global/Accordion"
//Packages
import DOMPurify from "dompurify"

export default function FAQs(product: ProductProps) {
  return (
    <div className="faqs">
      <section className="section-spacer section-spacer-top">
        <div className="container-xl">
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
                            const sanitisedHTML = DOMPurify.sanitize(resp)
                            return <p key={index} dangerouslySetInnerHTML={{ __html: sanitisedHTML }}></p>
                          })
                        ) : (
                          <Fragment></Fragment>
                        )}
                        <ul>
                          {item.bulletresponse.length > 0 ? (
                            item.bulletresponse.map((bullet, index) => {
                              const sanitisedHTML = DOMPurify.sanitize(bullet)
                              return <li key={index} dangerouslySetInnerHTML={{ __html: sanitisedHTML }}></li>
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
        </div>
      </section>
    </div>
  )
}

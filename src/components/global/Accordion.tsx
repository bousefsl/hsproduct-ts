type AccordionProps = {
  id: string
  children: React.ReactNode
}

type AccordionItemProps = {
  children: React.ReactNode
}

type AccordionHeaderProps = {
  header: string
  expanded: boolean
  index: number
}

type AccordionBodyProps = {
  expanded: boolean
  index: number
  id: string
  children: React.ReactNode
}

export function Accordion({ id, children }: AccordionProps) {
  return (
    <div className="accordion" id={id}>
      {children}
    </div>
  )
}

export function AccordionItem({ children }: AccordionItemProps) {
  return <div className="accordion-item">{children}</div>
}

export function AccordionHeader({ header, expanded, index }: AccordionHeaderProps) {
  return (
    <h2 className="accordion-header">
      <button className={`accordion-button ${expanded ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index + 1}`} aria-expanded={`${expanded ? "true" : "false"}`} aria-controls={`#collapse${index + 1}`}>
        {header}
      </button>
    </h2>
  )
}

export function AccordionBody({ expanded, index, id, children }: AccordionBodyProps) {
  return (
    <div id={`collapse${index + 1}`} className={`accordion-collapse collapse ${expanded ? "show" : ""}`} data-bs-parent={`#${id}`}>
      <div className="accordion-body">{children}</div>
    </div>
  )
}

//Metadata
export type MetaTagProps = {
  title: string
  keywords: string
  description: string
  name: string
}

//Comparison Page - Data & Cards
export type CompProductProps = {
  productCategory: string
  id: number
  title: string
  monthlyCost: number
  excessCost: number
  inclusions: string[]
  exclusions: string[]
  policyLink: string
}

export type LandlordCompProductProps = {
  productCategory: string
  id: number
  title: string
  monthlyCost: number
  inclusions: string[]
  exclusions: string[]
  policyLink: string
}

//Product Page
export type ProductProps = {
  policyLink: string
  productCategory: string[]
  id: number
  title: string
  productParagraph: string[]
  monthlyCost: number
  annualCost: number
  excessCost: number
  hasOffer: boolean
  hasOfferContent: string
  secondYearMonthlyCost: number
  secondYearAnnualCost: number
  insuranceFor: string[]
  insuranceNotFor: string[]
  insuranceNotForLinkRequired: boolean
  insuranceNotForLink: string
  whatsCovered: string[]
  whatsNotCovered: string[]
  eligibilityOwner: string
  eligibilityOwnerPropertyCover: string
  FAQsAccordionID: string
  FAQs: faqProps[]
}

export type faqProps = {
  expandedonLoad: boolean
  header: string
  response: string[]
  bulletresponse: string[]
}

//CTAs
export type LinkProps = {
  linkTo: string
  linkTarget?: string
  linkRel?: string //"noreferrer"
  linkClass?: string
  children: React.ReactNode
}

export type ButtonLinkProps = {
  children: React.ReactNode
  toLink: string
  variant?: string
  id?: string
  otherClasses?: string
  linkTarget?: string
  linkRel?: string //"noreferrer"
}

export type ButtonProps = {
  children: React.ReactNode
  variant?: string
  disabled?: boolean
  id?: string
  otherClasses?: string
}

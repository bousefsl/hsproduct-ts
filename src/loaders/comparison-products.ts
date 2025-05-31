//Loaders
import { baseApi, baseLandlordApi } from "./base"
//Types
import type { CompProductProps, LandlordCompProductProps } from "../types"

type myParams = {
  productCategory: string | null
}
type requestProps = {
  params: myParams
  signal: AbortSignal | undefined
}

export function comparisonProductsLoader(options: requestProps): Promise<CompProductProps> {
  //console.log(options)
  return baseApi.get("products", options).then((res) => res.data)
}

export function landlordComparisonProductsLoader(options: requestProps): Promise<LandlordCompProductProps> {
  return baseLandlordApi.get("landlordproducts", options).then((res) => res.data)
}

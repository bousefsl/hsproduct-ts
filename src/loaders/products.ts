//Loaders
import { baseProductsApi } from "./base"
//Types
import type { ProductProps } from "../types"

type requestSignalProps = {
  signal: AbortSignal | undefined
}

export function productLoader(policyLink: string, options: requestSignalProps): Promise<ProductProps> {
  return baseProductsApi.get(`${policyLink}`, options).then((res) => res.data)
}

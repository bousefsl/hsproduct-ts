import { baseApi, baseLandlordApi } from "./base"

export function comparisonProductsLoader() {
  return baseApi.get("products").then((res) => res.data)
}

export function landlordComparisonProductsLoader() {
  return baseLandlordApi.get("landlordproducts").then((res) => res.data)
}

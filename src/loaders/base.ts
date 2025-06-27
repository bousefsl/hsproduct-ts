import axios from "axios"

export const baseApi = axios.create({ baseURL: "http://localhost:8000" })
export const baseLandlordApi = axios.create({ baseURL: "http://localhost:8001" })
export const baseProductsApi = axios.create({ baseURL: "http://localhost:8002" })

//Useful for when we want to slow down our loading of APIs
//Must make sure to change "VITE_SLOW_API" to "true" in ".env.development" too

// if (import.meta.env.VITE_SLOW_API === "true") {
//   baseApi.interceptors.response.use((res) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(res)
//       }, 1000)
//     })
//   })
// }

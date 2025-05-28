import axios from "axios"

export const baseApi = axios.create({ baseURL: "http://localhost:8000" })
export const baseLandlordApi = axios.create({ baseURL: "http://localhost:8001" })

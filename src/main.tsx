import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
//Routes
import { RouterProvider } from "react-router"
import { router } from "./router"
//Style
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import "./App.scss"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
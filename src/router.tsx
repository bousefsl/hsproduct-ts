//React Router
import { createBrowserRouter } from "react-router"
//Layouts
import RootLayout from "./layouts/RootLayout"
//Pages
import Home from "./pages/Home"
import Comparison from "./pages/Comparison"
import Product from "./pages/Product"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "comparison", element: <Comparison /> },
      { path: "product", element: <Product /> },
    ],
  },
])

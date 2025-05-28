//React Router
import { createBrowserRouter } from "react-router"
//Layouts
import RootLayout from "./layouts/RootLayout"
//Pages
import Home from "./pages/Home"
import Product from "./pages/Product"
//Pages/Loaders
import { comparisonListRoute } from "./pages/Comparison"
import { landlordComparisonRoute } from "./pages/LandlordComparison"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "comparison", ...comparisonListRoute },
      { path: "landlord-comparison", ...landlordComparisonRoute },
      { path: "product", element: <Product /> },
    ],
  },
])

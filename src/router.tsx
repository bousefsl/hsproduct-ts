//React Router
import { createBrowserRouter } from "react-router"
//Layouts
import RootLayout from "./layouts/RootLayout"
//Pages
import Home from "./pages/Home"
//Pages/Loaders
import { comparisonListRoute } from "./pages/Comparison"
import { landlordComparisonRoute } from "./pages/LandlordComparison"
import { productsListRoute } from "./pages/Product"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "comparison", ...comparisonListRoute },
      { path: "landlord-comparison", ...landlordComparisonRoute },
      { path: "products/:policyLink", ...productsListRoute },
    ],
  },
])

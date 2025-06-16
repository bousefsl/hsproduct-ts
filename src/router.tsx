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
import NotFound from "./pages/NotFound"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          { index: true, element: <Home /> },
          { path: "comparison", ...comparisonListRoute },
          { path: "landlord-comparison", ...landlordComparisonRoute },
          { path: "products/:policyLink", ...productsListRoute },
          { path: "*", element: <NotFound /> },
        ],
      },
    ],
  },
])

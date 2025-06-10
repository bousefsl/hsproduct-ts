//React Router
import { Outlet, ScrollRestoration } from "react-router"
//Components
import Header from "../components/global/Header"
import Footer from "../components/global/Footer"

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <ScrollRestoration />
      <main>
        <div className="main-container" aria-label="Main Content Area">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

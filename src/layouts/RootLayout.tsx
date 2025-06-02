//React Router
import { Outlet, ScrollRestoration } from "react-router"
//Components
import Header from "../components/global/Header"
import NavBar from "../components/global/NavBar"
import Footer from "../components/global/Footer"

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <NavBar />
      <ScrollRestoration />
      <main>
        <div className="main-container" aria-label="Main Content Area">
          <div className="container-xl">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

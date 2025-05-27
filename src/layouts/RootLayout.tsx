//React Router
import { Outlet } from "react-router"
//Components
import Header from "../components/global/Header"
import NavBar from "../components/global/NavBar"
import Footer from "../components/global/Footer"

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <NavBar />
      <main>
        <div className="main-container" aria-label="Main Content Area">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

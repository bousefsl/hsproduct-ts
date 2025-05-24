//React Router
import { Outlet } from "react-router"
//Components
import Footer from "../components/global/Footer"
import Header from "../components/global/Header"

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <main>
        <div className="main-container" aria-label="Main Content Area">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

import { Outlet } from "react-router-dom"
import Navbar from "../Shared/Navbar/Navbar"
import Footer from "../Shared/Footer/Footer"

const MainLayout = () => {
  return (
    <div className="overflow-hidden min-h-screen bg-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout

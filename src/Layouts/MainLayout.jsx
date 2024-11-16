import { Outlet } from "react-router-dom"
import Navbar from "../Shared/Navbar/Navbar"
import Footer from "../Shared/Footer/Footer"

const MainLayout = () => {
  return (
    <div className="overflow-hidden min-h-screen bg-white">
      <Navbar />
      <div className="mt-[105px]">
      <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout

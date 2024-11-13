import AboutUsSection from "../../Components/home/AboutUsSection"
import BannerSection from "../../Components/home/BannerSection"
import CampusSecton from "../../Components/home/CampusSecton"
import DepartmentSection from "../../Components/home/DepartmentSection"
import OurTeachers from "../../Components/home/OurTeachers"

const Home = () => {
  return (
    <div className="">
      <BannerSection/>
      <AboutUsSection/>
      <div className="w-[90%] xl:w-[1224px] mx-auto overflow-hidden">
      <CampusSecton/>
      <DepartmentSection/>
      <OurTeachers/>
      </div>
    </div>
  )
}

export default Home

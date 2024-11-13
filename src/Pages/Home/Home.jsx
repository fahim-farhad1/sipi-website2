import AboutUsSection from "../../Components/home/AboutUsSection"
import BannerSection from "../../Components/home/BannerSection"
import CampusSecton from "../../Components/home/CampusSecton"
import OurCources from "../../Components/home/CourcesSction"
import OurTeachers from "../../Components/home/OurTeachers"

const Home = () => {
  return (
    <div className="">
      <BannerSection/>
      <AboutUsSection/>
      <div className="w-[90%] xl:w-[1224px] mx-auto overflow-hidden">
      <CampusSecton/>
      <OurCources/>
      <OurTeachers/>
      </div>
    </div>
  )
}

export default Home

import BannerSection from "../../Components/home/BannerSection"
import OurCources from "../../Components/home/CourcesSction"
import OurTeachers from "../../Components/home/OurTeachers"

const Home = () => {
  return (
    <div className="">
      <BannerSection/>
      <div className="w-[90%] xl:w-[1224px] mx-auto overflow-hidden">
      <OurCources/>
      <OurTeachers/>
      </div>
    </div>
  )
}

export default Home

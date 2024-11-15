import AboutUsSection from "../../Components/home/AboutUsSection"
import BannerSection from "../../Components/home/BannerSection"
import CampusSecton from "../../Components/home/CampusSecton"
import DepartmentSection from "../../Components/home/DepartmentSection"
import EventSection from "../../Components/home/EventSection"
import GuestTestimonialSection from "../../Components/home/GuestTestimonialSection"
import OurTeachers from "../../Components/home/OurTeachers"

const Home = () => {
  return (
    <div className="">
      <BannerSection/>
      <div className="w-[90%] xl:w-[1224px] mx-auto overflow-hidden">
      <DepartmentSection/>
      <AboutUsSection/>
      <CampusSecton/>
      <OurTeachers/>
      <EventSection/>
      <GuestTestimonialSection/>
      </div>
    </div>
  )
}

export default Home

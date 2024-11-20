import AboutUsSection from "../../Components/home/AboutUsSection"
import BannerSection from "../../Components/home/BannerSection"
import CampusSecton from "../../Components/home/CampusSection"
import DepartmentSection from "../../Components/home/DepartmentSection"
import EventSection from "../../Components/home/EventSection"
import GuestTestimonialSection from "../../Components/home/GuestTestimonialSection"
import LabFacilitiesSection from "../../Components/home/LabFacilitiesSection"
import NoticeSection from "../../Components/home/NoticeSection"
import OurTeachers from "../../Components/home/OurTeachers"
import WhyChoseUs from "../../Components/home/WhyChoseUs"

const Home = () => {
  return (
    <div className="">
      <BannerSection/>
      <div className="w-[90%] xl:w-[1224px] mx-auto overflow-hidden">
      <AboutUsSection/>
      <DepartmentSection/>
      <CampusSecton/>
      <OurTeachers/>
      <EventSection/>
      <GuestTestimonialSection/>
      <LabFacilitiesSection/>
      <WhyChoseUs/>
      <NoticeSection/>
      </div>
    </div>
  )
}

export default Home

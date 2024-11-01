import OurCources from "../../Components/home/CourcesSction"
import OurTeachers from "../../Components/home/OurTeachers"

const Home = () => {
  return (
    <div className="w-[90%] xl:w-[1224px] mx-auto overflow-hidden">
      <OurCources/>
      <OurTeachers/>
    </div>
  )
}

export default Home

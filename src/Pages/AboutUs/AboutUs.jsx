import DepartmentBanner from "../../Components/Banners/DepartmentBanner";
import LeftTitle from "../../Components/ReuseableTitle/leftTitle";
import AboutPrincipal from "./AboutPrincipal/AboutPrincipal";
import AboutUniversity from "./AboutUniversity/AboutUniversity";
import BannerImage from "../../assets/AboutUsBanner.jpg"
import Staff from "./Staff/Staff";

const BannerData = {
  image: "https://i.ibb.co/ZBFLMk0/dsgadsgbdb.jpg",
  title: "About Us",
  description:
    "Clgun University is more than just a place of learning; it's a place where dreams take flight, where ideas flourish, and where you'll find the support and...",
};

const aboutUniversityData = {
  title: "About Our polytechnic",
  subtitle: "A Station of Engineering Education",
  description:
    "Shyamoli Ideal Polytechnic Institute is dedicated to advancing education and research, producing skilled diploma engineers for national and global needs. With a commitment to excellence, it aims to shape a new era in engineering education, preparing graduates to excel in professional opportunities while embracing future challenges with unwavering determination.",
  images: [
    {
      src: "https://i.ibb.co/dmHjmtz/Camp01.jpg",
      alt: "Campus 01",
    },
    {
      src: "https://i.ibb.co/WvKwD6M/Camp02.jpg",
      alt: "Campus 02",
    },
  ],
};

const principalData = {
  image: "https://i.ibb.co/xYYdxXn/Principal.jpg",
  name: "Principal of Shyamoli Ideal Polytechnic Institute",
  description:
    "Founder   of Shyamoli Ideal Shikkha Poribar President,Bangladesh Federation of Technical Teachers's Association (BFTTA) President,Bangladesh Technical Teachers's Association (BTCTA) Chairman, Bangladesh Computer Education Development Society (BCEDS) Chairman, Shyamoli Textile Engineering College (STEC) Chairman, Principal M.A.Sattar Trust",
};

const academicServices = [
  {
    img: "https://i.ibb.co/tYrLFQ7/icon2.png",
    title: "Education Services",
    description:
      "There are many variations of passages Lorem Ipsum available but the majority have suffered alteration in some form.",
  },
  {
    img: "https://i.ibb.co/nP4ykQ1/icon1.png",
    title: "International Hubs",
    description:
      "There are many variations of passages Lorem Ipsum available but the majority have suffered alteration in some form.",
  },
  {
    img: "https://i.ibb.co/58vZhp5/icon3.png",
    title: "Research Opportunities",
    description:
      "There are many variations of passages Lorem Ipsum available but the majority have suffered alteration in some form.",
  },
];

const staffData = [
  {
    id: 1,
    name: "Sazzadul idslam molla",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://i.ibb.co/CJr6YJh/Mentor-Img-3.jpg",
    designation: "Director",
  },
  {
    id: 2,
    name: "Sazzadul idslam molla",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://i.ibb.co/CJr6YJh/Mentor-Img-3.jpg",
    designation: "Dean of Academics",
  },
  {
    id: 3,
    name: "Sazzadul idslam molla",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://i.ibb.co/CJr6YJh/Mentor-Img-3.jpg",
    designation: "Head of Administration",
  },
  {
    id: 4,
    name: "Sazzadul idslam molla",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://i.ibb.co/CJr6YJh/Mentor-Img-3.jpg",
    designation: "Head of Research & Development",
  },
  {
    id: 5,
    name: "Sazzadul idslam molla",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://i.ibb.co/CJr6YJh/Mentor-Img-3.jpg",
    designation: "Head of Administration",
  },
  {
    id: 6,
    name: "Sazzadul idslam molla",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://i.ibb.co/CJr6YJh/Mentor-Img-3.jpg",
    designation: "Head of Administration",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <DepartmentBanner Image={BannerImage} />
      <AboutUniversity
        aboutUniversityData={aboutUniversityData}
      ></AboutUniversity>
      {/* <LeftTitle badge={"A Station of Engineering Education"} /> */}
      <AboutPrincipal principalData={principalData}></AboutPrincipal>

      <Staff staffData={staffData}></Staff>
      {/* <Academics academicServices={academicServices}></Academics> */}
      
    </div>
  );
};

export default AboutUs;

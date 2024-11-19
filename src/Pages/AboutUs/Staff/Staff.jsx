import React from "react";
import { IoIosSchool } from "react-icons/io";

const Staff = () => {
  const staffData = [
    {
      id: 1,
      name: "Sazzadul idslam molla",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tem incid idunt ut labore et magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tem incid idunt ut labore et dolore magna aliqua. Ut enim ad minim iam quis nostrud xerci tation ulla mco laboris nisi ut.",
      imageUrl: "https://i.ibb.co/CJr6YJh/Mentor-Img-3.jpg",
      designation: "Director",
    },
    {
      id: 2,
      name: "Sazzadul idslam molla",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tem incid idunt ut labore et magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tem incid idunt ut labore et dolore magna aliqua. Ut enim ad minim iam quis nostrud xerci tation ulla mco laboris nisi ut.",
      imageUrl: "https://i.ibb.co/CJr6YJh/Mentor-Img-3.jpg",
      designation: "Dean of Academics",
    },
    {
      id: 3,
      name: "Sazzadul idslam molla",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tem incid idunt ut labore et magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tem incid idunt ut labore et dolore magna aliqua. Ut enim ad minim iam quis nostrud xerci tation ulla mco laboris nisi ut.",
      imageUrl: "https://i.ibb.co/CJr6YJh/Mentor-Img-3.jpg",
      designation: "Head of Administration",
    },
    {
      id: 4,
      name: "Sazzadul idslam molla",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tem incid idunt ut labore et magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tem incid idunt ut labore et dolore magna aliqua. Ut enim ad minim iam quis nostrud xerci tation ulla mco laboris nisi ut.",
      imageUrl: "https://i.ibb.co/CJr6YJh/Mentor-Img-3.jpg",
      designation: "Head of Research & Development",
    },
    {
      id: 5,
      name: "Sazzadul idslam molla",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tem incid idunt ut labore et magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tem incid idunt ut labore et dolore magna aliqua. Ut enim ad minim iam quis nostrud xerci tation ulla mco laboris nisi ut.",
      imageUrl: "https://i.ibb.co/CJr6YJh/Mentor-Img-3.jpg",
      designation: "Head of Administration",
    },
    {
      id: 6,
      name: "Sazzadul idslam molla",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tem incid idunt ut labore et magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tem incid idunt ut labore et dolore magna aliqua. Ut enim ad minim iam quis nostrud xerci tation ulla mco laboris nisi ut.",
      imageUrl: "https://i.ibb.co/CJr6YJh/Mentor-Img-3.jpg",
      designation: "Head of Administration",
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto">
      <p className="text-center text-4xl font-semibold py-5 text-black underline">
        Our Staff
      </p>
      {staffData.map((staff, index) => (
        <div
          key={staff.id}
          className={`flex items-center ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          {/* Left (Text) */}
          <div className="w-1/2 px-20 text-black ">
            <div className="flex text-2xl items-center font-semibold gap-5">
              <IoIosSchool className="text-green-600"/>
              {staff.designation}
            </div>
            <p className="text-2xl font-semibold py-5">{staff.name}</p>
            <p className="text-lg leading-relaxed">{staff.description}</p>
          </div>
          {/* Right (Image) */}
          <div className="w-1/2">
            <img src={staff.imageUrl} alt={staff.name} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Staff;

[];

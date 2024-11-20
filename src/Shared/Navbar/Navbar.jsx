import { IoMdCall } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import { TfiEmail } from "react-icons/tfi";
import {
  FaChevronDown,
  FaFacebookF,
  FaListUl,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Logo/sipi.png";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Departments",
    subLinks: [], // We'll dynamically populate this array with fetched data
  },
  {
    name: "Academic",
    subLinks: [
      { name: "Academic", path: "/Academic" },
      { name: "Notices", path: "/Academic/Notices" },
      { name: "Routines", path: "/Academic/Routines" },
      { name: "Results", path: "/Academic/Results" },
    ],
  },
  {
    name: "Administration",
    subLinks: [
      { name: "Teachers", path: "/Administration/Teachers" },
      { name: "Management", path: "/Administration/Management" },
    ],
  },
  { name: "Blogs", path: "/blogs" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const axiosPublic = useAxiosPublic();
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [open, setOpen] = useState(false);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Fetch DepartmentNames Data
  const {
    data: DepartmentNamesData = [],
    isLoading: DepartmentNamesDataIsLoading,
    error: DepartmentNamesDataError,
  } = useQuery({
    queryKey: ["DepartmentNamesData"],
    queryFn: () => axiosPublic.get(`/DepartmentNames`).then((res) => res.data),
  });

  // Loader State
  if (DepartmentNamesDataIsLoading) {
    return <Loader />;
  }

  // Error State
  if (DepartmentNamesDataError) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-300 to-white">
        <p className="text-center text-red-500 font-bold text-3xl mb-8">
          Something went wrong. Please reload the page.
        </p>
        <button
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition duration-300"
          onClick={() => window.location.reload()}
        >
          Reload
        </button>
      </div>
    );
  }

  // Dynamically update the "Departments" nav item based on fetched data
  const updatedNavLinks = navLinks.map((link) => {
    if (link.name === "Departments") {
      link.subLinks = DepartmentNamesData.map((dept) => ({
        name: dept,
        path: `/Departments/${dept}`, // Dynamically create the path
      }));
    }
    return link;
  });

  return (
    <div className="w-full bg-white fixed z-10 border border-gray-200">
      {/* top navbar */}
      <div className="bg-orange-700 h-12 md:h-10 flex items-center">
        <div className="mx-auto w-full flex items-center justify-between">
          <div className="flex items-center md:h-10 px-1 md:px-5">
            <div className="flex items-center gap-3 text-sm">
              <IoMdCall className="h-6 w-6 text-white" />
              <a href="tel:+8801712634870" className="text-white">
                +8801712634870
              </a>
            </div>
            <RxDividerVertical className="h-12 w-8 md:h-16 md:w-10 text-white" />
            <div className="flex items-center gap-3 text-sm">
              <TfiEmail className="w-5 h-5 text-white" />
              <a href="mailto:info@sipi.edu.bd" className="text-white">
                info@sipi.edu.bd
              </a>
            </div>
          </div>
          <div className="hidden md:block mr-10">
            <div className="text-white absolute z-10 right-10 top-3 flex gap-5">
              <Link to="https://www.facebook.com/">
                <FaFacebookF />
              </Link>
              <Link to="https://www.instagram.com">
                <IoLogoInstagram />
              </Link>
              <Link to="https://www.x.com">
                <FaXTwitter />
              </Link>
              <Link to="https://www.youtube.com">
                <FaYoutube />
              </Link>
            </div>
            <span className="bg-green-900 h-10 w-6/12 -right-4 top-0 absolute -skew-x-[36deg]"></span>
          </div>
        </div>
      </div>

      {/* main navbar */}
      <div className="mx-2 md:mx-10 h-16 flex items-center justify-between">
        <img className="h-16 w-16" src={logo} alt="SIPI LOGO" />
        {open ? (
          <MdClose
            onClick={() => setOpen(!open)}
            className="md:hidden text-black h-8 w-8"
          />
        ) : (
          <FaListUl
            onClick={() => setOpen(!open)}
            className="h-6 w-6 md:hidden text-black"
          />
        )}

        {/* Mobile sidebar nav */}
        <div
          className={`md:hidden flex flex-col space-y-2 absolute text-black top-[112px] bg-white h-[2000px] w-8/12 pl-4 py-2 ${
            open ? "right-0" : "-right-[400px]"
          } duration-500 space-y-5 border border-gray-200 px-2 pt-5 font-semibold`}
        >
          {updatedNavLinks.map((link, index) =>
            link.subLinks ? (
              <div key={link.name}>
                <div
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center cursor-pointer justify-between"
                >
                  <span className="font-semibold text-gray-700">
                    {link.name}
                  </span>
                  <button className="ml-2">
                    {activeAccordion === index ? (
                      <FaChevronLeft className="h-4 w-4 text-gray-600" />
                    ) : (
                      <FaChevronRight className="h-4 w-4 text-gray-600" />
                    )}
                  </button>
                </div>

                {/* Dropdown Content */}
                {activeAccordion === index && (
                  <div className="pl-6 mt-2 space-y-2">
                    {link.subLinks.map((subLink) => (
                      <div key={subLink.name}>
                        <NavLink
                          to={subLink.path}
                          className="block py-1 text-gray-700 hover:text-blue-500"
                          onClick={() => setOpen(false)} // Close the sidebar
                        >
                          {subLink.name}
                        </NavLink>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                className="block mb-2 hover:text-blue-500 font-semibold"
                onClick={() => setOpen(false)} // Close the sidebar
              >
                {link.name}
              </NavLink>
            )
          )}
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex gap-5 font-semibold text-black items-center">
          {updatedNavLinks.map((link) =>
            link.subLinks ? (
              <div key={link.name} className="relative group">
                <span
                  onClick={(e) => e.preventDefault()}
                  className="hover:text-blue-500 cursor-default flex items-center"
                >
                  {link.name} <FaChevronDown className="ml-2" />
                </span>

                <ul className="absolute hidden group-hover:block bg-white z-[1] w-52 p-2 shadow">
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.name} className="w-full">
                      <NavLink
                        to={subLink.path}
                        className="block w-full px-4 py-2 hover:text-blue-500 hover:bg-gray-100"
                      >
                        {subLink.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                className="hover:text-blue-500"
              >
                {link.name}
              </NavLink>
            )
          )}
        </div>

        <button className="bg-orange-700 py-3 px-3 text-white hover:bg-green-700 duration-500 hidden md:block">
          ADMISSION OPEN
        </button>
      </div>
    </div>
  );
};

export default Navbar;

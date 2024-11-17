import { IoMdCall } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookF, FaListUl, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Logo/sipi.png";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Departments",
    path: "/department",
    subLinks: [
      { name: "Computer", path: "/departments/Computer" },
      { name: "Architecture", path: "/departments/Architecture" },
      { name: "Civil", path: "/Departments/civil" },
      { name: "Graphics", path: "/Departments/Graphics" },
    ],
  },
  {
    name: "Academic",
    path: "/Academic",
    subLinks: [
      { name: "Admissions", path: "/academic/admissions" },
      { name: "Programs", path: "/academic/programs" },
      { name: "Research", path: "/academic/research" },
    ],
  },
  {
    name: "Administration",
    subLinks: [
      { name: "Teacher", path: "/Administration/Teacher" },
      { name: "Management", path: "/Administration/Management" },
    ],
  },
  { name: "Blogs", path: "/blogs" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [open, setOpen] = useState(false);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

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
          {navLinks.map((link, index) =>
            link.subLinks ? (
              <div key={link.name}>
                {/* Toggleable Accordion Header */}
                <div
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center cursor-pointer justify-between"
                >
                  <NavLink
                    to={link.path}
                    className="hover:text-blue-500 font-semibold"
                  >
                    {link.name}
                  </NavLink>
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
              >
                {link.name}
              </NavLink>
            )
          )}
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex gap-5 font-semibold text-black items-center">
          {navLinks.map((link) =>
            link.subLinks ? (
              <div key={link.name} className="relative group">
                <NavLink className="hover:text-blue-500" to={link.path}>
                  {link.name}
                </NavLink>

                {/* Dropdown menu only shows on hover */}
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

          {/* <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button> */}
        </div>

        <button className="bg-orange-700 py-3 px-3 text-white hover:bg-green-700 duration-500 hidden md:block">
          ADMISSION OPEN
        </button>
      </div>
    </div>
  );
};

export default Navbar;

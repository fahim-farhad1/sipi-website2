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
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Departments",
    subLinks: [
      { name: "Computer", path: "/departments/Computer" },
      { name: "Architecture", path: "/departments/Architecture" },
      { name: "Civil", path: "/Departments/Civil" },
      { name: "Graphics", path: "/Departments/Graphics" },
    ],
  },
  {
    name: "Academic",
    subLinks: [
      { name: "Academic", path: "/Academic" },
      { name: "Notices", path: "/Notices" },
      { name: "Routines", path: "/Routines" },
      { name: "Results", path: "/Results" },
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
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [open, setOpen] = useState(false);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="w-full bg-white fixed z-50 border border-gray-200">
      {/* Top navbar */}
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

      {/* Main navbar */}
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
                <div
                  onClick={() => toggleDropdown(index)}
                  className="flex items-center cursor-pointer justify-between"
                >
                  <span className="font-semibold">{link.name}</span>
                  {activeDropdown === index ? (
                    <FaChevronUp className="h-4 w-4 text-gray-600" />
                  ) : (
                    <FaChevronDown className="h-4 w-4 text-gray-600" />
                  )}
                </div>
                {activeDropdown === index && (
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
          {navLinks.map((link, index) =>
            link.subLinks ? (
              <div key={link.name} className="relative">
                <div
                  onClick={() => toggleDropdown(index)}
                  className="flex items-center cursor-pointer hover:text-blue-500"
                >
                  <span className="">{link.name}</span>
                  {activeDropdown === index ? (
                    <FaChevronUp className="ml-2 h-4 w-4 " />
                  ) : (
                    <FaChevronDown className="ml-2 h-4 w-4 " />
                  )}
                </div>
                {activeDropdown === index && (
                  <ul className="absolute bg-white z-[1] w-52 p-2 shadow mt-2">
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
                )}
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

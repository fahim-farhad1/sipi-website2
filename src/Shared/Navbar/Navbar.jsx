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
const Navbar = () => {
  const [open, isOpen] = useState(false);
  const navLink = (
    <>
      <NavLink>Home</NavLink>
      <NavLink>Departments</NavLink>
      <NavLink>Academic</NavLink>
      <NavLink>Administration</NavLink>
      <NavLink>Blogs</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Contact</NavLink>
    </>
  );
  return (
    <div className="w-full bg-white ">
      {/* top navbar  */}
      <div className="bg-orange-700 h-12 md:h-10 flex items-center">
        <div className="mx-auto w-full flex items-center justify-between">
          <div className="flex items-center md:h-10 px-5">
            <div className="flex">
              <IoMdCall className="h-6 w-6 mt-[2px] text-white" />
              <p className="text-white"> +8801712634870</p>
            </div>
            {/* divider  */}
            <RxDividerVertical className=" h-12 w-8 md:h-16 md:w-10 text-white" />
            <div className="flex items-center gap-1">
              <TfiEmail className="w-5 h-5 text-white" />
              <p className="text-white">info@sipi.edu.bd</p>
            </div>
          </div>

          <div className="hidden md:block mr-10">
            <div className="text-white absolute z-10 right-10 top-3 flex gap-5">
              <Link to="https://www.facebook.com/">
                <FaFacebookF />
              </Link>
              <Link to="https://www.instragramcom">
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
      {/* main navbar  */}
      <div className="mx-10 h-16  flex items-center justify-between">
        <img className="h-14 w-14" src={logo} alt="SIPI LOGO" />
        {open ? (
          <MdClose
            onClick={() => isOpen(!open)}
            className="md:hidden h-8 w-8"
          />
        ) : (
          <FaListUl
            onClick={() => isOpen(!open)}
            className="h-6 w-6 md:hidden"
          />
        )}
        {/* sidebar nav  */}
        <div className={`md:hidden flex flex-col space-y-2 absolute text-black top-[112px]  h-full bg-white w-6/12 pl-4 py-2 ${open ? 'right-0' : '-right-[400px]'} duration-500`}>
        {navLink}
        </div>
        {/* sidebar nav end  */}
        <div className="hidden md:block">
          <div className="flex gap-5 font-semibold text-black items-center">
            {navLink}
            <button className="btn btn-ghost btn-circle">
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
            </button>
          </div>
        </div>
        <button className="bg-orange-700 py-5 px-3 text-white hover:bg-green-700 duration-500 hidden md:block">
          ADMISSION OPEN
        </button>
      </div>
    </div>
  );
};

export default Navbar;

import { IoMdCall } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      {/* top navbar  */}
      <div className="bg-green-900 h-12 md:h-10 flex items-center">
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
              <Link to='https://www.facebook.com/'><FaFacebookF /></Link>
              <Link to='https://www.instragramcom'><IoLogoInstagram /></Link>
              <Link to='https://www.x.com'><FaXTwitter /></Link>
              <Link to='https://www.youtube.com'><FaYoutube /></Link>
            
            </div>
            <span className="bg-orange-700 h-10 w-6/12 -right-4 top-0 absolute -skew-x-[36deg]">
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import school from "../../assets/school.png";
import Default from "../../assets/Default.png";
import BannerDefault from "../../assets/AcademicSection.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLongArrowAltRight,
  FaTwitter,
} from "react-icons/fa";
import Gallery from "../../Components/Gallary/Gallery";
import DepartmentBanner from "../../Components/Banners/DepartmentBanner";
import bannerImage from "../../assets/AcademicBanner.jpg"
const Academic = () => {
  const GalleryImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOukS7rHwuCWVpCLj6V-0mCxzrQiNiJ5XKmtOsl8ehQ0LRRcWmknrW2ZvB3UgbbS886M8&usqp=CAU",
    "https://www.sipi.edu.bd/img/lab8.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_NLUCtJlPgt-4rvdmXHdFufw04YLpsHpDw&s",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/336575992_2087873484751486_3808810988217926430_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHAaq3DQ9Kq7VIElkPJvoK0636uM9zmwSPrfq4z3ObBI5x5gBi3wSFPV-nUZo2vlDw2RNiebyntV0AmBNgItw26&_nc_ohc=ZEsKSrZZ1MkQ7kNvgFkoNyX&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=ACcXYytV2azgCqwORTYQFkI&oh=00_AYAZJV2SVgVADNvb5hFVPb67ka7PXEm-J81Y-ZKISWPH3Q&oe=67448140",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/336341567_196459423016120_5847679746308400938_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGveqYQTaG5X48svSfNM4ThHoShFG5y5GkehKEUbnLkaZNipJwgKRtpQGesg3Ygds-4vFgw0fX_2eHsxFh4eIuo&_nc_ohc=GWamlSHWUhcQ7kNvgE92jtG&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=Ag4EaQMgr9_CKQL91OMuQsY&oh=00_AYBglWLWulmR39KR8GXrwtXns1LxqrIa5mtDiyKek88gxg&oe=6743FC47",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/336282932_1375660839923007_2921214220354574683_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHWFoDJ4AgK-n6zv7isjpVQPE7Ddv2aN3E8TsN2_Zo3cR4bRx5sDic9_tgvpdtCKrrhD6-gvigatmm6GhIDPxUJ&_nc_ohc=IqpMc3zndPwQ7kNvgFuaSOv&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=AyrGH96i5f4fwXsTa4XWhR-&oh=00_AYBtlXB9rg5ecYBuooQ0paWlosZEIxoWFdpXepDKJm4wHw&oe=67446BE7",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/335439588_556599282939132_6267332709305874580_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeE8xUQsmLuG184iGzryGOQHHPsI5pOiEv0c-wjmk6IS_VgLdc1pnMEUsPHBGE5HVR3ROmNHxg-keNI8F5noCA1w&_nc_ohc=wAVRerSloJgQ7kNvgHb-Pgh&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=AOGkpbBjQbVThIv7Cmwb5mc&oh=00_AYCwitFACDmpuohJWlv0iMcV0Tsfkxn9c9WTCiGXr9YRww&oe=674403D0",
    "https://www.sipi.edu.bd/img/lab2.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXaTA4FE24FzTmM5O0SIuw02jUw6C4vZeh2TBsrMTox-JkNj_GuT1FwNBX3ZNZX10t0c4&usqp=CAU",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/335439588_556599282939132_6267332709305874580_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeE8xUQsmLuG184iGzryGOQHHPsI5pOiEv0c-wjmk6IS_VgLdc1pnMEUsPHBGE5HVR3ROmNHxg-keNI8F5noCA1w&_nc_ohc=wAVRerSloJgQ7kNvgHb-Pgh&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=AOGkpbBjQbVThIv7Cmwb5mc&oh=00_AYCwitFACDmpuohJWlv0iMcV0Tsfkxn9c9WTCiGXr9YRww&oe=674403D0",
    "https://www.sipi.edu.bd/img/lab7.jpg",
  
    
  ];

  return (
    <div className="text-black">
      <DepartmentBanner Image={bannerImage} />
      {/* Main Container */}
      <div className="gap-5 pt-10">
        {/* Top Part */}
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-center w-full">
            <p className="text-[128px] font-semibold text-center">
              12+{" "}
              <span className="text-3xl md:text-5xl font-semibold md:text-left">
                BTEB Affiliated Courses
              </span>
            </p>
          </div>
          {/* Top text-1 */}
          <p className="text-[#7A7A7A] text-lg font-medium md:px-5 text-center md:text-left">
            The Bangladesh Technical Education Board (BTEB) offers a range of
            12+ vocational and technical education programs to equip students
            with practical skills and industry-specific knowledge. These courses
            are designed for students who have completed their secondary
            education and wish to pursue specialized training in fields like
            engineering, technology, healthcare, design, and hospitality.
          </p>
        </div>

        {/* Gallery */}
        <div className="my-32 px-32">
          <Gallery images={GalleryImages} />
        </div>

        {/* Banner */}
        <div className="pt-10 relative max-w-[1200px] mx-auto">
          <img
            src={BannerDefault}
            alt="Banner"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white w-full sm:max-w-[900px] p-5 border border-gray-60">
            <p className="text-black text-2xl md:text-3xl font-semibold text-center">
              Graduate Areas of Study
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2 pt-5">
              {[
                "Refrigeration and Air Conditioning Technology",
                "Computer Technology",
                "Architecture and Interior Design Technology",
                "Electronics Technology",
                "Civil Technology",
                "Mechanical Technology",
                "Power Technology",
                "Ceramic Technology",
                "Surveying Technology",
                "Automobile Technology",
                "Garment Design and Pattern Making",
                "Food Technology",
                "Data Communication and Networking",
                "Telecommunication Technology",
                "Graphic Design Technology",
                "Printing Technology",
              ].map((tag, index) => (
                <button
                  key={index}
                  className="flex items-center justify-between text-lg md:text-xl bg-[#f2F8F1] hover:text-green-500 transition-colors duration-700 px-5 py-2 rounded-lg"
                >
                  <span>{tag}</span>
                  <FaLongArrowAltRight className="ml-5" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Value Section */}
        <div className="pt-[400px] relative flex flex-col md:flex-row items-center md:items-start max-w-[1200px] mx-auto px-5">
          <div className="bg-[#F2F8F1] px-6 py-16 md:px-11 md:py-28 w-full md:w-[600px] rounded-lg text-center md:text-left">
            <p className="text-2xl md:text-3xl font-bold">Mission & Values</p>
            <p className="text-[#272424] text-base md:text-lg font-semibold mt-4 md:w-[500px] mx-auto md:mx-0">
            The mission of Shyamoli Ideal Polytechnic Institute, SIPI is to produce highly skilled manpower. This mission is achieved by imparting high quality professional education and training so that individuals can achieve their intellectual, social and personal potentials.SIPI is committed to developing human capital by sharpening creative thinking. In addition to creation and dissemination of technical knowledge, its mission includes promotion of humanism and peace through education. As a social institution, SIPI endeavors to induce changes for betterment of the society as a whole through public services, and through promotion of ethical behavior and social justice.
            </p>
            {/* <p className="text-[#7A7A7A] text-base md:text-lg font-semibold mt-4 md:w-[300px] mx-auto md:mx-0">
            Our vision at Shyamoli Ideal Polytechnic Institute (SIPI) is to become a nationally and internationally recognized center of excellence in technical education. We aspire to be a leading institution that produces graduates who are sought after by employers and esteemed for their contributions to society. SIPI will continually adapt to emerging technologies and industry trends, ensuring our students are well-prepared for the challenges and opportunities of the future. We envision a future where SIPI is a symbol of innovation, integrity, and excellence in technical education, fostering the growth of individuals and the prosperity of the communities we serve.
            </p> */}
            <p className="text-green-500 text-base md:text-lg font-semibold pt-5 cursor-pointer">
              Read More
            </p>
          </div>
          <img
            src={Default}
            alt="Default Image"
            className="mt-8 md:-mt-20 md:absolute md:left-[480px] md:bottom-14 w-[280px] md:w-[400px] h-[250px] md:h-[400px] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Bottom Part */}
      {/* <div className="bg-[#2e465e] mt-28 py-10 text-center">
        <img src={school} alt="school" className="mx-auto" />
        <div>
          <p className="text-2xl text-[#B9B9BA] w-[90%] max-w-[800px] mx-auto mb-8">
            University Life Nurtures an Inclusive Campus Life Environment Where
            Students Grow Intellectually...
          </p> */}

      {/* Social Media Icons */}
      {/* <div className="flex justify-center gap-3 flex-wrap">
            <p className="bg-[#073972] hover:bg-green-500 transition-colors duration-700 text-white px-4 py-4">
              <FaFacebookF className="text-xl" />
            </p>
            <p className="bg-[#073972] hover:bg-green-500 transition-colors duration-700 text-white px-4 py-4">
              <FaInstagram className="text-xl" />
            </p>
            <p className="bg-[#073972] hover:bg-green-500 transition-colors duration-700 text-white px-4 py-4">
              <FaTwitter className="text-xl" />
            </p>
            <p className="bg-[#073972] hover:bg-green-500 transition-colors duration-700 text-white px-4 py-4">
              <FaLinkedinIn className="text-xl" />
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Academic;

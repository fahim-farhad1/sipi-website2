import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Static Banner Data
const BannerData = [
  {
    _id: "671f1838cf9012893901db19",
    department: {
      department_img: "https://i.ibb.co.com/nB5RGzv/Default.jpg",
      name: "Computer Science Department",
      redirect: "https://college-website.com/computer-science",
    },
    banner_images: [
      "https://i.ibb.co.com/Mpm1GZp/Demo-Banner.jpg",
      "https://i.ibb.co.com/Mpm1GZp/Demo-Banner.jpg",
      "https://i.ibb.co.com/Mpm1GZp/Demo-Banner.jpg",
    ],
    diploma: "Diploma in Computer Science",
    about: [
      "In the contemporary world, a nation's prowess in computer and information technology is directly proportional to its advancement in art, literature, culture, and its economic prosperity. Over the past decade, our nation has witnessed a revolutionary surge in computerization across all sectors. The ubiquitous presence of computers is evident in every facet of our society, be it within organizations, industries, or even fields as diverse as art, literature, banking, insurance, and education. This technology permeates every corner of our lives.",
      "Consequently, a burgeoning population of young minds has embraced information technology, paving the way for prestigious careers both within our country's borders and on the global stage. The infusion of IT knowledge has not only reduced unemployment within our nation but has also generated a positive ripple effect on our economic landscape. A considerable number of our country's youth, who have harnessed this IT expertise, now lead successful lives through education and employment opportunities in various regions across Europe, America, Australia, and South Africa.",
      "Even those who have chosen to remain within our country's borders have made remarkable strides. They are pursuing B.Sc. Engineering degrees in esteemed universities and contributing their skills and expertise to renowned domestic and multinational corporations. The synergy between technology and education has been instrumental in propelling our country forward in an era where technological prowess stands as the cornerstone of progress.",
    ],

    objectives: [
      "Provides the highest quality education so that students can cope with both undergraduate and graduate program. Provides state-of-the-art education.",
      "Establish a productive Computer Science and Engineering career in industry, academia, or government sector.",
      "Ensure career development in the field of computer systems engineering or software systems engineering.",
      "Students will be trained in such a way that they can work as a team member or be able to lead a team effectively.",
      "Students will learn the development of innovative systems and solutions using hardware and software integration.",
    ],

    features: [
      "State-of-the-art computer labs",
      "Industry-aligned curriculum",
      "Internship opportunities with top tech companies",
      "Project-based learning approach",
    ],
    success: [
      "100% internship placement rate",
      "75% of graduates employed within 6 months",
      "Top rankings in national coding competitions",
    ],
    requirements: [
      "Completed high school education",
      "Pass in English and Mathematics",
      "Computer literacy recommended",
    ],
    lab_facilities: [
      "Computer Lab with 50+ workstations",
      "AI and Robotics Lab",
      "Networking Lab with real-world equipment",
      "Software Development Lab",
    ],

    qualifications:
      "Minimum GPA of 3.0 in high school or equivalent, basic knowledge in mathematics, and a passion for technology.",
    duration: "4 years",

    count: {
      current_students: 300,
      current_teachers: 300,
      passed_students: 1200,
      total_teachers: 20,
      chief_instructor: "Dr. Jane Smith",
    },

    course_outline: [
      {
        semester: "Semester 1",
        subjects: [
          "Introduction to Computer Science",
          "Basic Mathematics",
          "English for Technology",
          "Fundamentals of Programming",
        ],
      },
      {
        semester: "Semester 2",
        subjects: [
          "Data Structures and Algorithms",
          "Database Management Systems",
          "Discrete Mathematics",
          "Operating Systems",
        ],
      },
      {
        semester: "Semester 3",
        subjects: [
          "Software Engineering",
          "Computer Networks",
          "Web Development",
          "Mobile Application Development",
        ],
      },
      {
        semester: "Semester 4",
        subjects: [
          "Advanced Database Systems",
          "Computer Architecture",
          "Artificial Intelligence",
          "Network Security",
        ],
      },
      {
        semester: "Semester 5",
        subjects: [
          "Machine Learning",
          "Cloud Computing",
          "Data Analytics",
          "Advanced Programming",
        ],
      },
      {
        semester: "Semester 6",
        subjects: [
          "Mobile Application Development",
          "Internet of Things",
          "Blockchain Technology",
          "Ethical Hacking",
        ],
      },
      {
        semester: "Semester 7",
        subjects: [
          "Big Data",
          "Software Project Management",
          "Natural Language Processing",
          "Computer Graphics",
        ],
      },
      {
        semester: "Semester 8",
        subjects: ["Group Project", "Internship"],
      },
    ],

    scholarship: {
      description:
        "Scholarships available for top-performing students based on academic excellence and financial need.",
      eligibility:
        "Minimum GPA of 3.5 in the previous semester, active participation in department activities.",
    },
    bteb_thoughts:
      "We are delighted to announce the BTEB Government Scholarship program for all eligible students. This scholarship offers financial support of 4000 taka each semester to every student pursuing technical and vocational education. It's a great opportunity to ease the financial burden of your studies.",
  },
];

const Banner = () => {
  const [bannerData, setBannerData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Fetch data on component mount
  useEffect(() => {
    // Assume BannerData is passed from a prop or API, or we can use the static data
    setBannerData(BannerData[0]); // Just set the first object for now
  }, []);

  // Access the banners (if any) and other content
  const banners = bannerData?.banner_images || [];
  const objectives = bannerData?.objectives || [];
  const features = bannerData?.features || [];
  const success = bannerData?.success || [];
  const requirements = bannerData?.requirements || [];
  const lab_facilities = bannerData?.requirements || [];
  const qualifications = bannerData?.qualifications || [];
  const duration = bannerData?.duration || [];
  const course_outline = bannerData?.course_outline || [];
  const scholarship = bannerData?.scholarship || [];
  const bteb_thoughts = bannerData?.bteb_thoughts || [];

  const handlePrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? banners.length - 1 : prevIndex - 1
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === banners.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  if (!bannerData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full overflow-hidden">
        <div
          className={`w-full transition-opacity duration-500 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <img
            src={banners[currentIndex]}
            alt={`Banner ${currentIndex + 1}`}
            className="w-full"
          />
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-4 bg-black/50 text-white p-5 rounded-full hover:bg-black"
          onClick={handlePrevious}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute top-1/2 right-4 bg-black/50 text-white p-5 rounded-full hover:bg-black"
          onClick={handleNext}
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="max-w-[1200px] mx-auto flex mt-10 gap-10">
        {/* Left Part */}
        <div className="w-2/3 text-black">
          <h2 className="text-black font-bold text-3xl md:text-5xl">
            {bannerData.diploma || "Diploma in Computer Science"}
          </h2>

          {/* About */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold">
              About {bannerData.diploma}
            </h2>
            <div className="space-y-5 pt-5 leading-relaxed">
              {bannerData.about.map((paragraph, index) => (
                <p key={index} className="text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Objectives */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold">Our Objectives</h2>
            <ul className="list-disc pl-5 pt-5 space-y-3 text-gray-700">
              {objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold">Features</h2>
            <ul className="list-disc pl-5 pt-5 space-y-3 text-gray-700">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Success */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold">Our Success</h2>
            <ul className="list-disc pl-5 pt-5 space-y-3 text-gray-700">
              {success.map((successItem, index) => (
                <li key={index}>{successItem}</li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold">Admission Requirements</h2>
            <ul className="list-disc pl-5 pt-5 space-y-3 text-gray-700">
              {requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>

          {/* lab_facilities */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold">Lab facilities</h2>
            <ul className="list-disc pl-5 pt-5 space-y-3 text-gray-700">
              {lab_facilities.map((facilities, index) => (
                <li key={index}>{facilities}</li>
              ))}
            </ul>
          </div>

          {/* Qualifications, Duration */}
          <div className="mt-10">
            <div className="text-lg font-semibold flex">
              <p>Qualifications: </p>
              <span className="ml-5">{qualifications}</span>
            </div>
            <div className="text-lg font-semibold flex">
              <p>Duration: </p>
              <span className="ml-5">{duration}</span>
            </div>
          </div>

          {/* Course Outline */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold">Course Outline</h2>
            <div className="space-y-5 pt-5 grid grid-cols-2 gap-4">
              {course_outline.map((semester, index) => (
                <div key={index} className="mt-4 border border-gray-100 p-3">
                  <h3 className="text-lg font-semibold">{semester.semester}</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-4">
                    {semester.subjects.map((subject, idx) => (
                      <li key={idx}>{subject}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Scholarship */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold">Scholarships</h2>

            {/* Scholarship Description */}
            <div className="pt-5 space-y-3">
              <p className="text-gray-700">{scholarship.description}</p>
              <p className="text-gray-700">
                <strong>Eligibility:</strong> {scholarship.eligibility}
              </p>
            </div>

            {/* Scholarship Money for Each Semester */}
            <div className="pt-5 space-y-3">
              <h3 className="text-lg font-semibold">
                Scholarship Money per Semester
              </h3>

              {/* Grid Layout for Scholarships */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {course_outline.map((semester, index) => {
                  // Generate scholarship money for each semester (example values)
                  const scholarshipMoney = `$${(index + 1) * 1000}`; // Example: $1000 for Semester 1, $2000 for Semester 2, etc.
                  return (
                    <div
                      key={index}
                      className="p-4 border rounded-lg shadow-lg text-center bg-gray-100 hover:sh"
                    >
                      <h4 className="text-md font-semibold">
                        {semester.semester}
                      </h4>
                      <p className="text-xl font-bold text-green-600">
                        {scholarshipMoney}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* BTEB Thoughts Section */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold">BTEB Thoughts</h2>
            <p className="text-gray-700 mt-2 leading-relaxed text-lg">
              {bteb_thoughts}
            </p>
          </div>
        </div>

        {/* Right part */}
        <div className="w-1/3 text-white">
          {/* Department Stats */}
          <div className=" py-10 mt-6 bg-blue-500">
            <h3 className="text-2xl font-semibold text-center">
              Department Overview
            </h3>
            <div className="flex mt-3 justify-between text-xl font-semibold px-2 mb-10">
              <p>Chief Instructor:</p>{" "}
              <span>{bannerData.count?.chief_instructor}</span>
            </div>


            <div className="flex justify-between text-xl font-semibold border-y py-5 px-2 border-white">
              <p>Current Students:</p>{" "}
              <span>{bannerData.count?.current_students}</span>
            </div>

            <div className="flex justify-between text-xl font-semibold border-b py-5 px-2 border-white">
              <p>Current Teachers:</p>{" "}
              <span>{bannerData.count?.current_teachers}</span>
            </div>
            
            <div className="flex justify-between text-xl font-semibold border-b py-5 px-2 border-white">
              <p>Passed Students:</p>{" "}
              <span> {bannerData.count?.passed_students}</span>
            </div>
            <div className="flex justify-between text-xl font-semibold border-b py-5 px-2 border-white">
              <p>Total Teachers:</p>{" "}
              <span> {bannerData.count?.total_teachers}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

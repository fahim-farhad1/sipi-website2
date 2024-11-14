import Default from "../../assets/Default.png";

const Academic = () => {
  return (
    <div className="mt-[105px] max-w-[1200px] mx-auto text-black">
      <div className="flex  ">
        {/* Buttons */}

        <div className="w-2/5 space-y-2 mt-20">
          <button className="font-semibold text-2xl p-5 w-4/5 text-left bg-[#F2F8F1] hover:bg-[#002147] hover:text-white transition-colors duration-700">
            Academic
          </button>
          <button className="font-semibold text-2xl p-5 w-4/5 text-left bg-[#F2F8F1] hover:bg-[#002147] hover:text-white transition-colors duration-700">
            All Notices
          </button>
          <button className="font-semibold text-2xl p-5 w-4/5 text-left bg-[#F2F8F1] hover:bg-[#002147] hover:text-white transition-colors duration-700">
            All Routines
          </button>
          <button className="font-semibold text-2xl p-5 w-4/5 text-left bg-[#F2F8F1] hover:bg-[#002147] hover:text-white transition-colors duration-700">
            Results
          </button>
        </div>

        {/* Content */}
        <div className=" w-3/5 mt-20">
          {/* Top Part */}
          <div className="flex items-center gap-5">
            <p className="text-[128px] font-semibold">41+</p>
            <p className="text-5xl font-semibold">
              Majors, Minors & Graduate Programs
            </p>
          </div>

          {/* Top text-1 */}
          <p className="pt-12 text-[#7A7A7A] text-lg font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tem incid idunt ut labore et dolore magna aliqua. Ut enim ad
            minim ven iam quis nostrud xerci tation ulla mco laboris nisi ut
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tem incid idunt ut labore
          </p>

          {/* Top text-2 */}
          <p className="pt-6 text-[#7A7A7A] text-lg font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tem incid idunt ut labore et dolorem gna aliqua. Ut enim ad
            minim ven iam quis nostrud xerci.
          </p>

          {/* Images */}
          <div className="pt-8 flex gap-5">
            {/* Img group 1 */}
            <div className="relative">
              <img
                src={Default}
                alt="Default Image"
                className="w-60 h-[250px]"
              />
              <img
                src={Default}
                alt="Default Image"
                className="w-60 h-[250px] absolute top-44 left-11" // Positioning it slightly lower
                style={{ marginTop: "-40px" }} // Adjust this value to control overlap
              />
            </div>

            <img src={Default} alt="Default Image" className="w-60 h-[250px]" />

            {/* Img group 2 */}
            <div className="relative">
              <img
                src={Default}
                alt="Default Image"
                className="w-60 h-[250px]"
              />
              <img
                src={Default}
                alt="Default Image"
                className="w-60 h-[250px] absolute top-44 left-11" // Positioning it slightly lower
                style={{ marginTop: "-40px" }} // Adjust this value to control overlap
              />
            </div>
          </div>

          {/* Degree Level */}
          <div className="pt-48">
            <h5 className="text-4xl font-bold">Degree Level</h5>

            {/* Mid text-1 */}
            <p className="pt-12 text-[#7A7A7A] text-lg font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tem incid idunt ut labore et dolore magna aliqua. Ut enim
              ad minim ven iam quis nostrud xerci tation ulla mco laboris nisi
              ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tem incid idunt ut labore
            </p>

            {/* Mid text-2 */}
            <p className="pt-6 text-[#7A7A7A] text-lg font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tem incid idunt ut labore et dolorem gna aliqua. Ut enim
              ad minim ven iam quis nostrud xerci.
            </p>
          </div>

          {/* Buttons */}
          <div>
            <button>Graduate</button>
            <button>Online Education</button>
            <button>Undergraduate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;

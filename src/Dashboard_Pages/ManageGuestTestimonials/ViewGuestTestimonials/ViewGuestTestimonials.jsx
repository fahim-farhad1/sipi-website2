import React from "react";

const ViewGuestTestimonials = ({ TestimonialData }) => {
  return (
    <div className="modal-box bg-white max-w-[1000px] p-0 ">
      <div className="flex justify-between items-center border-b border-gray-300 px-10">
        <h1 className="text-3xl font-semibold text-center mb-6">
          View Guest Testimonials
        </h1>
        <button
          className="text-3xl font-bold hover:text-red-500"
          onClick={() =>
            document.getElementById("View_Modal_GuestTestimonials").close()
          }
        >
          X
        </button>
      </div>

      {/* Testimonials List */}
      <div className="mt-6 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6 border-b border-gray-300 pb-6">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={TestimonialData?.image}
              alt={TestimonialData?.name}
              className="w-48 h-48 rounded-full shadow-lg object-cover"
            />
          </div>

          {/* Information Section */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800">
              {TestimonialData?.name}
            </h2>
            <p className="text-gray-500 text-lg">{TestimonialData?.position}</p>
            <p className="mt-1 text-sm text-gray-400">
              <span className="font-medium">Comments:</span>{" "}
              {TestimonialData?.comments}
            </p>
            <p className="mt-1 text-sm text-gray-400">
              <span className="font-medium">Date of Visit:</span>{" "}
              {new Date(TestimonialData?.date_of_visit).toLocaleDateString()}
            </p>

            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-700">
                Testimonial
              </h3>
              <p className="mt-2 text-gray-600">
                {TestimonialData?.testimonial}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewGuestTestimonials;

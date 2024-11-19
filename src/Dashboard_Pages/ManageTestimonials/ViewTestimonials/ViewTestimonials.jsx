import React from "react";

const ViewTestimonials = ({ testimonialData }) => {
  return (
    <div className="modal-box bg-white max-w-[1000px] rounded-lg shadow-lg p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center pb-4 border-b border-gray-300">
        <h1 className="text-3xl font-semibold text-gray-700">
          View Testimonial
        </h1>
        <button
          className="text-3xl font-bold text-gray-700 hover:text-red-500"
          onClick={() =>
            document.getElementById("View_Modal_Testimonials").close()
          }
        >
          X
        </button>
      </div>

      {/* Content Section */}
      <div className="mt-6 flex flex-col md:flex-row gap-6">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={testimonialData?.image}
            alt={testimonialData?.name}
            className="w-48 h-48  shadow-lg"
          />
        </div>

        {/* Information Section */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold text-gray-800">
            {testimonialData?.name}
          </h2>
          <p className="text-gray-500 text-lg">{testimonialData?.position}</p>
          <p className="mt-1 text-sm text-gray-400">
            <span className="font-medium">Department:</span>{" "}
            {testimonialData?.department}
          </p>
          <p className="mt-1 text-sm text-gray-400">
            <span className="font-medium">Date:</span>{" "}
            {new Date(testimonialData?.date).toLocaleDateString()}
          </p>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-700">Testimonial</h3>
            <p className="mt-2 text-gray-600">{testimonialData?.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTestimonials;

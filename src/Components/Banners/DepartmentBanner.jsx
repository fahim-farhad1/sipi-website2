import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const DepartmentBanner = ({ Image }) => {
  const location = useLocation();

  // Extract the pathname and split it into parts
  const pathParts = location.pathname.slice(1).split("/"); // Remove the leading '/' and split
  const firstPart = pathParts[0] || "Home"; // Default to 'Home' if empty
  const secondPart = pathParts[1]; // If there's no second part, it will be undefined

  // Set the title dynamically: use secondPart if it exists, otherwise fallback to firstPart
  const title = secondPart || firstPart;

  return (
    <section
      className="relative min-h-[450px] bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>

      {/* Banner Content */}
      <div className="relative z-0 px-4">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
      </div>

      {/* Badge Button */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <a
          href="#"
          className="bg-primary text-white flex py-3 px-6 rounded-badge shadow-lg hover:bg-primary transition"
        >
          <NavLink to={"/"}>
            <span>Home</span>
          </NavLink>
          <span className="px-2">|</span> <span>{firstPart}</span>
          {secondPart && (
            <>
              <span className="px-2">|</span> <span>{secondPart}</span>
            </>
          )}
        </a>
      </div>
    </section>
  );
};

export default DepartmentBanner;

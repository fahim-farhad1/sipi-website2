import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  // Admin/Manager Links
  const adminNavLinks = [
    { to: "ManageTeachers", label: "Manage Teachers Data" },
    { to: "ManageManagement", label: "Manage Management Data" },
    { to: "ManageNotices", label: "Manage Notices " },
    { to: "ManageRoutine", label: "Manage Routine " },
    { to: "ManageTuitionFee", label: "Manage Tuition Fee " },
    { to: "ManageDepartment", label: "Manage Department " },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-500 to-sky-100 text-black">
      <div className="flex ">
        {/* Dashboard sidebar */}
        <div className="w-80 h-screen pb-10 fixed bg-white overflow-y-auto">
          {/* Logo */}
          <div className="py-5 text-center border-b-2 border-black">
            <p className="text-xl font-bold text-blue-500">
              SIPI Portfolio Website
            </p>
            <p className="text-xl font-bold text-black">Dashboard</p>
          </div>

          {/* Navigation Links */}
          <ul className="space-y-1 px-1 pt-4">
            {adminNavLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "border-2 border-blue-500 bg-blue-100 text-blue-700 text-xl py-2 px-5 block rounded-none"
                      : "border-2 border-gray-200 text-xl py-2 px-5 block text-black hover:bg-blue-100 hover:text-blue-700 rounded-none"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 lg:ml-[320px] overflow-y-auto min-h-screen relative bg-gradient-to-br from-blue-500 to-sky-100 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

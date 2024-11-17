import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Academic from "../Pages/Academic/Academic";
import External from "../Pages/External/External";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Admission from "../Pages/Admission/Admission";
import Framework from "../Pages/Departments/Framework/Framework";
import Teacher from "../Pages/Administration/Teacher/Teacher";
import Management from "../Pages/Administration/Management/Management";
import DashboardLayout from "../Layouts/DashboardLayout";
import ManageTeachers from "../Dashboard_Pages/ManageTeachers/ManageTeachers";
import ManageManagement from "../Dashboard_Pages/ManageManagement/ManageManagement";
import Notices from "../Pages/Notices/Notices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: (
    //   <div>
    //     {
    //       "I think you facing some problem please call Fahim => fahim.farhad1392@gmail.com"
    //     }
    //   </div>
    // ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/departments/:department",
        element: <Framework />,
      },

      {
        path: "/academic",
        element: <Academic />,
      },
      {
        path: "/Notices",
        element: <Notices />,
      },
      {
        path: "/external",
        element: <External />,
      },
      {
        path: "/Administration/Teacher",
        element: <Teacher />,
      },
      {
        path: "/Administration/Management",
        element: <Management />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
    ],
  },
  {
    path: "/Dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "ManageTeachers",
        element: <ManageTeachers></ManageTeachers>,
      },
      {
        path: "ManageManagement",
        element: <ManageManagement></ManageManagement>,
      },
    ],
  },
]);
export default router;

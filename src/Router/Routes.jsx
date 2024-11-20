import { createBrowserRouter, Route } from "react-router-dom";
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
import Routines from "../Pages/Routines/Routines";
import Results from "../Pages/Results/Results";
import ManageNotices from "../Dashboard_Pages/ManageNotices/ManageNotices";
import ManageTuitionFee from "../Dashboard_Pages/ManageTuitionFee/ManageTuitionFee";
import ManageDepartment from "../Dashboard_Pages/ManageDepartment/ManageDepartment";
import ManageRoutine from "../Dashboard_Pages/ManageRoutine/ManageRoutine";
import ManageTestimonials from "../Dashboard_Pages/ManageTestimonials/ManageTestimonials";
import ManageCampus from "../Dashboard_Pages/ManageCampus/ManageCampus";
import ManageGuestTestimonials from "../Dashboard_Pages/ManageGuestTestimonials/ManageGuestTestimonials";
import Blogs from "../Pages/Blogs/Blogs";
import ManageBlogs from "../Dashboard_Pages/ManageBlogs/ManageBlogs";
import ManageApplicants from "../Dashboard_Pages/ManageApplicants/ManageApplicants";

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
        path: "/Departments/:department",
        element: <Framework />,
      },
      {
        path: "/Academic",
        element: <Academic />,
      },
      {
        path: "/Academic/Notices",
        element: <Notices />,
      },
      {
        path: "/Academic/Routines",
        element: <Routines />,
      },
      {
        path: "/Academic/Results",
        element: <Results />,
      },
      {
        path: "/external",
        element: <External />,
      },
      {
        path: "/Administration/Teachers",
        element: <Teacher />,
      },
      {
        path: "/Administration/Management",
        element: <Management />,
      },
      {
        path: "/About",
        element: <AboutUs />,
      },
      {
        path: "/Contact",
        element: <ContactUs />,
      },
      {
        path: "/Admission",
        element: <Admission />,
      },
      {
        path: "/Blog",
        element: <Blogs />,
      },
      {
        path: "/Blog/:id",
        element: <Blogs />,
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
      {
        path: "ManageNotices",
        element: <ManageNotices></ManageNotices>,
      },
      {
        path: "ManageRoutine",
        element: <ManageRoutine></ManageRoutine>,
      },
      {
        path: "ManageTuitionFee",
        element: <ManageTuitionFee></ManageTuitionFee>,
      },
      {
        path: "ManageDepartment",
        element: <ManageDepartment></ManageDepartment>,
      },
      {
        path: "ManageTestimonials",
        element: <ManageTestimonials></ManageTestimonials>,
      },
      {
        path: "ManageGuestTestimonials",
        element: <ManageGuestTestimonials></ManageGuestTestimonials>,
      },
      {
        path: "ManageCampus",
        element: <ManageCampus></ManageCampus>,
      },
      {
        path: "ManageBlogs",
        element: <ManageBlogs></ManageBlogs>,
      },
      {
        path: "ManageApplicant",
        element: <ManageApplicants></ManageApplicants>,
      },
    ],
  },
]);
export default router;

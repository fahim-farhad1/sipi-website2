import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Departments from "../Pages/Departments/Departments";
import Academic from "../Pages/Academic/Academic";
import External from "../Pages/External/External";
import Administration from "../Pages/Administration/Administration";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <div>
        {
          "I think you facing some problem please call Fahim => fahim.farhad1392@gmail.com"
        }
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/departments",
        element: <Departments />,
      },
      {
        path: "/academic",
        element: <Academic />,
      },
      {
        path: "/external",
        element: <External />,
      },
      {
        path: "/administration",
        element: <Administration />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);
export default router;

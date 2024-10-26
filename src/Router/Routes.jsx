import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        errorElement: <div>{"I think you facing some problem please call Fahim => fahim.farhad1392@gmail.com"}</div>,
        children:[
            {
                path:'/',
                element:<Home />
            }
        ]
    }

])
export default router;
import { createBrowserRouter } from "react-router";
import HomeLayout from "../homeLayout/HomeLayout";
import Home from "../home/Home";
import Services from "../services/Services";
import ImgSlider from "../imageSlider/ImgSlider";
import Login from "../login/Login";
import Register from "../register/Register";
import Profile from "../Profile/Profile";
import PrivateRoute from "../provider/PrivateRoute";





const router = createBrowserRouter([
     {
     path: "/",
     element: <HomeLayout></HomeLayout>,
     children:[
       {
        path:"/",
        element:<Home></Home>
       },
       {
        path:"/services",
        element:<Services></Services>
       },
       {
        path:"/",
        element:<ImgSlider></ImgSlider>,
       },
       {
        path:"/login",
        element:<Login></Login>,
       },
       {
        path:"/register",
        element:<Register></Register>,
       },
       {
        path:"/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>,
       }

     ]
     },

])

export default router;
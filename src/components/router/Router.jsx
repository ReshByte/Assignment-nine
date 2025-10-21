import { createBrowserRouter } from "react-router";
import HomeLayout from "../homeLayout/HomeLayout";
import Home from "../home/Home";
import Services from "../services/Services";
import ImgSlider from "../imageSlider/ImgSlider";





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

     ]
     },

])

export default router;
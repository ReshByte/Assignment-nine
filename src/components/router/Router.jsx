import { createBrowserRouter } from "react-router";
import HomeLayout from "../homeLayout/HomeLayout";
import Home from "../home/Home";
import Services from "../services/Services";
import ImgSlider from "../imageSlider/ImgSlider";
import Login from "../login/Login";
import Register from "../register/Register";
import Profile from "../Profile/Profile";
import PrivateRoute from "../provider/PrivateRoute";
import UpdateProfile from "../updateProfile/UpdateProfile";
import Loading from "../loading/Loading";
import ServiceComponent from "../Service/ServiceComponent";
import NotFound from "../notFound/NotFound";





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
        path:"/profile",
        element:<UpdateProfile></UpdateProfile>
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
       path: "/services",
       element: <PrivateRoute><ServiceComponent></ServiceComponent></PrivateRoute>,
       loader: () => fetch("/service.json"),
       },
       {
        path:"/services/:id",
        element:<PrivateRoute><Services></Services></PrivateRoute>,
        loader:()=>fetch("/service.json"), 
        hydrateFallbackElement: <Loading></Loading>
       },
       {
        path:"/update",
        element:<UpdateProfile></UpdateProfile>
       }

     ]
     },
     {
      path:"*",
      element:<NotFound></NotFound>
     }

])

export default router;
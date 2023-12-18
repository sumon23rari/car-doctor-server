import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import Bookservices from "../Pages/BookServices/Bookservices";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<LogIn></LogIn>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'booking/:id',
                element:<PrivateRoute><Bookservices></Bookservices></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:8000/services/${params.id}`)
            },
            {
                path:'bookings',
                element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
          
        ]
    },
  
])
export default router;
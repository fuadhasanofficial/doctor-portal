import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Homepage/Home/Home";
import Apooin from "../Pages/Appoin/AppoinmentContainer";
import AppoinContainer from "../Pages/Appoin/AppoinmentContainer";
import Signup from "../Pages/Signup/Signup";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoue from "../Layout/Private/PrivateRoue";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Signup></Signup> },
      { path: "/appoinment", element: <AppoinContainer></AppoinContainer> },
      { path: "/appoinment", element: <AppoinContainer></AppoinContainer> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoue>
        <Dashboard></Dashboard>
      </PrivateRoue>
    ),
  },
]);

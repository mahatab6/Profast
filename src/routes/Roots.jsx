import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import AuthenticationLayouts from "../layouts/AuthenticationLayouts";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Loading from "../components/Loading";
import BeaRider from "../pages/BeaRider";
import Coverage from "../pages/coverage/Coverage";
import AddParcel from "../pages/AddParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
        path: "loading",
        element: <Loading/>
      },
      {
        path: "be-a-rider",
        element: <BeaRider/>
      },{
        path: "coverage",
        element: <Coverage/>
      },
      {
       path: "add-parcel",
       element: <AddParcel/>
      }
    ]
  },
  {
    path: "/",
    element: <AuthenticationLayouts/>,
    children:[
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "register",
        element: <Register/>
      }
    ]
  }
]);
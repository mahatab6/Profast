import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import AuthenticationLayouts from "../layouts/AuthenticationLayouts";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    children:[
      {
        index: true,
        element: <Home/>
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
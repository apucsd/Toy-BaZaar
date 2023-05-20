import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Error from "../components/pages/error-page/Error";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/authentications/Login";
import Register from "../components/pages/authentications/Register";
import AllToys from "../components/pages/all-toys/AllToys";
import MyToys from "../components/pages/my-toys/MyToys";
import AddToy from "../components/pages/AddToys/AddToy";
import Blog from "../components/pages/blogs/Blog";
import PrivateRoute from "./PrivateRoute";
import Details from "../components/pages/view-details/Details";
import UpdateToy from "../components/pages/update toy/UpdateToy";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/update-toy/:id",
        element: <UpdateToy></UpdateToy>,
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-toy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/toys/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;

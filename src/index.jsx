import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Username from "./pages/Username";
import Layout from "./components/layout";
import Home from "./pages/home";
import ProfileUser from "./components/ProfileUser";

import("./style/reset.css");
import("./style/App.css");

const router = createBrowserRouter([
  { 
    path: "/",
    element:<Layout/>,
    children:[
      { 
        path: "/",
        element:<Home/>, 
      },
      { 
        path: "/profileUser",
        element:<ProfileUser/>, 
      },
      { 
        path: "/username/:id",
        element:<Username/>, 
      }
    ] 
  }
   
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

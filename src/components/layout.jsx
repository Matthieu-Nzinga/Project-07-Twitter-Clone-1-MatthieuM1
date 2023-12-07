import React from "react";
import LeftAsideBar from "./LeftAsideBar";
import RightAsideBar from "./RightAsideBar";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <LeftAsideBar />
      <Outlet />
      <RightAsideBar />
    </>
  );
}

export default Layout;

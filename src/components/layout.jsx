import React from "react";
import LeftAsideBar from "./LeftAsideBar";
import RightAsideBar from "./RightAsideBar";
import { Outlet } from "react-router-dom";
import { TweetProvider } from "../models/TweetContext";

function Layout({ children }) {
  return (
    <>
      <TweetProvider>
        <LeftAsideBar />
        <Outlet />
        <RightAsideBar />
      </TweetProvider>
    </>
  );
}

export default Layout;

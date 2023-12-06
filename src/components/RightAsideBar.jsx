import React from "react";
import "../style/rightAsideBar.css";
import { CiSearch } from "react-icons/ci";
import CardOne from "./CardOne";

function RightAsideBar() {
  return (
    <div className="right-sidebar">
      <div className="search">
        <CiSearch />
        <input  type="text" placeholder="Search Tweet"/>
      </div>
      <CardOne/>
    </div>
  );
}

export default RightAsideBar;

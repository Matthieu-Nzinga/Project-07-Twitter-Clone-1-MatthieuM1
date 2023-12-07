import React from "react";
import "../style/rightAsideBar.css";
import { CiSearch } from "react-icons/ci";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import Footer from "./Footer";

function RightAsideBar() {
  return (
    <div className="trends">
      <div className="search">
        <CiSearch />
        <input  type="text" placeholder="Search Tweet"/>
      </div>
      <CardOne/>
      <CardTwo/>
      <Footer/>
    </div>
  );
}

export default RightAsideBar;

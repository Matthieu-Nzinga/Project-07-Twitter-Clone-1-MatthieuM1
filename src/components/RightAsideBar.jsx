import React from "react";
import { CiSearch } from "react-icons/ci";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import Footer from "./Footer";

function RightAsideBar() {
  return (
    <div className="py-10 flex flex-col gap-5 max-w-[292px] relative">
      <div className="flex items-center gap-5 h-9 max-w-full p-2.5 bg-gray-800 rounded-full  text-xl ">
        <CiSearch />
        <input
          type="text"
          placeholder="Search Tweet"
          className="bg-transparent border-none text-white outline-none resize-none"
        />
      </div>
      <CardOne />
      <CardTwo />
      <Footer />
    </div>
  );
}

export default RightAsideBar;

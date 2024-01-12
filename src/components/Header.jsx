import React from "react";
import { iconsn } from "../assets/Icon";


function Header() {
  return (
    <div className="flex items-center justify-between py-[1.5rem] px-[1rem] border-b border-solid border-gray-700">
      <h1 className="text-[1.5rem] font-bold">Home</h1>
      <button>
        <img className="w-[1.5rem] h-auto " src={iconsn} alt="" />
      </button>
    </div>
  );
}

export default Header;

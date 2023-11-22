import React from "react";
import { iconsn } from "../assets/Icon";


function Header() {
  return (
    <div className="header">
      <h1 className="page-title">Home</h1>
      <button>
        <img className="top-tweets" src={iconsn} alt="" />
      </button>
    </div>
  );
}

export default Header;

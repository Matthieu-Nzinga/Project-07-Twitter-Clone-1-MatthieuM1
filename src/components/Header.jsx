import React from "react";
import { BsStars } from "react-icons/bs";

function Header() {
  return (
    <div className="header">
      <h1>Home</h1>
      <button>
        <BsStars />
      </button>
    </div>
  );
}

export default Header;

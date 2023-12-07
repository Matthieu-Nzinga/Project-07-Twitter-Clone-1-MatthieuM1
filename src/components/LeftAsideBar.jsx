import React from "react";
import { FaTwitter } from "react-icons/fa";
import "../style/leftAsideBar.css";
import LinkMenu from "./LinkMenu";
import { RiHome7Fill } from "react-icons/ri";
import { SiSharp } from "react-icons/si";
import { IoMdNotifications } from "react-icons/io";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { CiBookmark } from "react-icons/ci";
import { RiFileList2Line } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { CiCircleMore } from "react-icons/ci";

function LeftAsideBar() {
  return (
    <div className="sidebar">
      <div>
      <FaTwitter />
      <LinkMenu icon={<RiHome7Fill />} title={"Home"} />
      <LinkMenu icon={<SiSharp />} title={"Explore"} />
      <LinkMenu icon={<IoMdNotifications />} title={"Notifications"} />
      <LinkMenu icon={<HiOutlineEnvelope />} title={"Messages"} />
      <LinkMenu icon={<CiBookmark />} title={"Bookmarks"} />
      <LinkMenu icon={<RiFileList2Line />} title={"Lists"} />
      <LinkMenu icon={<HiOutlineUser />} title={"Profile"} />
      <LinkMenu icon={<CiCircleMore />} title={"More"} />
      <button>Tweet</button>
      </div>
    </div>
  );
}

export default LeftAsideBar;

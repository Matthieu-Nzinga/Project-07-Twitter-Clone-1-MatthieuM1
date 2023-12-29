import React from "react";
import profilPhoto from "../images/profile-photo.png";
import { RiLock2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="profil">
      <Link to={"/profileUser"} className="link-white">
        <img src={profilPhoto} alt="" />
      </Link>

      <div>
        <div className="profil-div">
        <Link to={"/profileUser"} className="link-dom">
          <p>Brandley Ortiz</p>
          </Link>
          <RiLock2Fill />
        </div>
        <span>@brandley</span>
      </div>
    </div>
  );
}

export default Profile;

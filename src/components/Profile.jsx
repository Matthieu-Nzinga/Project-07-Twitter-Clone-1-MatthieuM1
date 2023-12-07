import React from "react";
import profilPhoto from "../images/profile-photo.png";
import { RiLock2Fill } from "react-icons/ri";


function Profile() {
  return (
    <div className="profil">
      <img src={profilPhoto} alt="" />
      <div>
        <div className="profil-div">
        <p>Brandley Ortiz</p>
        <RiLock2Fill />
        </div>
        <span>@brandley</span>
      </div>
    </div>
  );
}

export default Profile;

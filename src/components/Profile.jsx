import React from "react";
import { RiLock2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { userProfil } from "../models/User";

function Profile() {
  const userP = userProfil.find((user) => user.isLogin === true);

  return (
    <div className="profil">
      <Link to={`/${userP.userName}`} className="link-white">
        <img src={userP.avatar} alt="" />
      </Link>

      <div>
        <div className="profil-div">
          <Link to={`/${userP.userName}`} className="link-dom">
            <p>{userP.userName} </p>
          </Link>
          <RiLock2Fill />
        </div>

        <span>{userP.lienProfil} </span>
      </div>
    </div>
  );
}

export default Profile;

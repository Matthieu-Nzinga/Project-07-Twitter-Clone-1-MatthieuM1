import React from "react";
import { RiLock2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useTweetContext } from "../models/TweetContext";


function Profile() {
  const { userProfils } = useTweetContext();
  const userP = userProfils.find((user) => user.isLogin === true);

  return (
    <div className="profil">
      <Link to={`/${userP?.userName}`} className="link-white">
        <img src={userP?.avatar} alt="" />
      </Link>

      <div>
        <div className="profil-div">
          <Link to={`/${userP?.userName}`} className="link-dom">
            <p>{userP?.userName} </p>
          </Link>
          <RiLock2Fill />
        </div>

        <span>{userP?.lienProfil} </span>
      </div>
    </div>
  );
}

export default Profile;

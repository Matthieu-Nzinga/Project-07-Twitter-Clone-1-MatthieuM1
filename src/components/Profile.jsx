import React from "react";
import { RiLock2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useTweetContext } from "../models/TweetContext";

function Profile() {
  const { userProfils } = useTweetContext();
  const userP = userProfils.find((user) => user.isLogin === true);

  return (
    <div className="flex gap-5 fixed items-center left-10 bottom-2.5">
      <Link to={`/${userP?.userName}`} className="link-white">
        <img className="w-20 h-20 rounded-full" src={userP?.avatar} alt="" />
      </Link>

      <div>
        <div className="flex items-center gap-3">
          <Link to={`/${userP?.userName}`}>
            <p>{userP?.userName} </p>
          </Link>
          <RiLock2Fill />
        </div>
        <Link to={`/${userP?.userName}`}>
          <span className="text-gray-500">{userP?.lienProfil} </span>
        </Link>
      </div>
    </div>
  );
}

export default Profile;

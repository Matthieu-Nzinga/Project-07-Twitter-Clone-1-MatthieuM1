import React from "react";
import { RiLock2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useTweetContext } from "../models/TweetContext";

function Profile() {
  const contextData = useTweetContext();
  const userP = contextData?.userProfils &&
  contextData?.userProfils?.length && contextData?.userProfils?.find((user) => user.id == 8);

  return (
    <div className="flex gap-5 fixed items-center left-10 bottom-2.5">
      <Link to={`/${userP?.name}`} className="link-white">
        <img className="w-20 h-20 rounded-full" src={userP?.profilePicture} alt="" />
      </Link>

      <div>
        <div className="flex items-center gap-3">
          <Link to={`/${userP?.name}`}>
            <p>{userP?.name} </p>
          </Link>
          <RiLock2Fill />
        </div>
        <Link to={`/${userP?.name}`}>
          <span className="text-gray-500">{userP?.handle} </span>
        </Link>
      </div>
    </div>
  );
}

export default Profile;

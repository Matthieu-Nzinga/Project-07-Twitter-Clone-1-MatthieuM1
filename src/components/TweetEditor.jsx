import React from "react";
import avatarImage from "../images/profile-photo.png";
import TweetAction from "./TweetAction";
import { Link } from "react-router-dom";
import { userProfil } from "../models/User";

function TweetEditor() {
  const userP = userProfil.find((user) => user.isLogin === true);
  return (
    <div className="flex items-start justify-start gap-[20px] px-[.3rem] py-[1rem] border-b border-solid border-gray-700 ">
      <aside className="basis-20 ">
        <Link to={`/${userP.userName}`} className="link-dom">
          <img className="max-w-full max-h-full rounded-full" src={userP.avatar} alt="" />
        </Link>
      </aside>

      <div className="flex-auto">
        <input
          className="h-[60px] w-full border-none outline-none text-white bg-black p-10 resize-none text-lg my-13 text-xl"
          type="text"
          placeholder="What's happening?"
        />

        <div className="flex items-center justify-between">
          <TweetAction />
          <button className="bg-blue-500 font-base text-white py-[.7rem] px-[1.5rem] ">Tweet</button>
        </div>
      </div>
    </div>
  );
}

export default TweetEditor;

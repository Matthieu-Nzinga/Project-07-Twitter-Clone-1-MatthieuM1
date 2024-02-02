import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTweetContext } from "../models/TweetContext";
import CreateTweet from "./CreateTweet";

function TweetEditor() {
  const { userProfils } = useTweetContext();

  const userP = userProfils.find((user) => user.isLogin === true);

  return (
    <div className="flex items-start justify-start gap-[20px] px-[.3rem] py-[1rem] border-b border-solid border-gray-700 ">
      <aside className="basis-20 ">
        <Link to={`/${userP?.userName}`} className="link-dom">
          <img
            className="max-w-full max-h-full rounded-full"
            src={userP?.avatar}
            alt=""
          />
        </Link>
      </aside>
      <CreateTweet />
    </div>
  );
}

export default TweetEditor;

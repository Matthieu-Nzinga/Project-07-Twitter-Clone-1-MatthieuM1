import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { GrLinkPrevious } from "react-icons/gr";
import { RxLink2 } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { RiUserFollowFill } from "react-icons/ri";
import TweetDetail from "../components/TweetDetail";
import { useTweetContext } from "../models/TweetContext";
import UserAffiliate from "../components/UserAffiliate";

function Username() {
  const { userName } = useParams();
  const { userProfils } = useTweetContext();

  const oneUser = userProfils.find((user) => {
    return user.userName == userName;
  });

  const { tweet } = useTweetContext();
  const Twitters = tweet.filter((tweeter) => {
    return tweeter.userId === oneUser.userId;
  });

  const [selectedTab, setSelectedTab] = useState("posts");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="w-[800px] border-x-[1px] border-solid border-gray-700">
      <div className="p-5 flex items-center gap-10 ">
        <Link to={"/"}>
          <GrLinkPrevious />
        </Link>
        <div >
          <h2 className="flex items-center gap-2">
            {oneUser?.userName} <img src={oneUser?.iconCertification} alt="" />
          </h2>
          <span className="text-gray-400 text-sm">{Twitters.length} posts</span>
        </div>
      </div>
      <div className="max-h-[350px] w-full relative ">
        <img className="w-full max-h-[350px] " src={oneUser?.banner} alt="" />
        <div className="absolute bottom-[-40px] pl-5 flex w-[150px] ">
          <img className="absolute bottom-[-40px] pl-50 flex rounded-full " src={oneUser?.avatar} alt="" />
          <div className="flex items-center gap-3 absolute bottom-[-35px] right-[-630px] ">
            <p className="w-10 h-10 border border-white text-center rounded-full pt-[2px] ">{oneUser?.points} </p>
            <button className="bg-white text-black px-5 py-2 text-xl">Follow</button>
          </div>
        </div>
      </div>
      <div className="mt-[70px] p-5">
        <h2 className="flex items-center gap-2">
          {oneUser?.userName} <img src={oneUser?.iconCertification} alt="" />
        </h2>
        <span className="text-gray-400 text-sm">{oneUser?.lienProfil} </span>
      </div>
      <p className="px-5 text-justify">{oneUser?.description} </p>
      <div className="p-5 flex items-center gap-4">
        <div className="flex items-center gap-1">
          <RxLink2 />
          <span className="text-[#1D9BF0] ">{oneUser?.linkWeb} </span>
        </div>
        <div className="flex items-center gap-1">
          <SlCalender />
          <span className="text-gray-400 text-sm">{oneUser?.dateCreated} </span>
        </div>
      </div>
      <div className="px-5 flex gap-8"> 
        <p>
          {oneUser?.abonnemets} <span className="text-gray-400 text-sm">abonnemets</span>
        </p>
        <p>
          {oneUser?.abonne} <span className="text-gray-400 text-sm">abonnés</span>
        </p>
      </div>
      <div className="p-5 flex items-center gap-2.5">
        <RiUserFollowFill />
        <span className="text-gray-400 text-sm">{oneUser?.suiviPar} </span>
      </div>
      <ul className="py-4 px-8 flex justify-between border-b border-gray-500 list-none">
        <li className={selectedTab === "posts" ? "cursor-pointer active" : "cursor-pointer"} onClick={() => handleTabClick("posts")}>Posts</li>
        <li className={selectedTab === "affilies" ? "cursor-pointer active" : "cursor-pointer"} onClick={() => handleTabClick("affilies")}>Affiliés</li>
        <li className={selectedTab === "reponse" ? "cursor-pointer active" : "cursor-pointer"} onClick={() => handleTabClick("reponse")}>Réponses</li>
        <li className={selectedTab === "media" ? "cursor-pointer active" : "cursor-pointer"} onClick={() => handleTabClick("media")}>Médias</li>
        <li className={selectedTab === "aime" ? "cursor-pointer active" : "cursor-pointer"} onClick={() => handleTabClick("aime")}>J'aime</li>
      </ul>
      {selectedTab === "posts" && (
        <div>
          <TweetDetail tweet={Twitters} userProfil={userProfils}/>
        </div>
      )}
      {selectedTab === "affilies" && (
        <div>
          <UserAffiliate/>
        </div>
      )}
    </div>
  );
}

export default Username;

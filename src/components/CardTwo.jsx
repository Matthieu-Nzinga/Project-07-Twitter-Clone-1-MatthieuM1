import React from "react";
import { follows } from "../models/Database";
import { Link } from "react-router-dom";
import { iconCertifier } from "../assets/Icon";
import { useTweetContext } from "../models/TweetContext";


function CardTwo() {
  const { userProfils } = useTweetContext();


  return (
    <div className="bg-gray-800 w-full flex gap-5 flex-col font-xl p-2.5 rounded-xl">
      <p className="font-bold">Who to follow</p>
      {follows.map((element) =>{
  const user = userProfils?.find((use) => use.userId === element.userId);

        return(
          <div className="flex items-center justify-between" key={element.id}>
          <div className="flex gap-2.5">
            <Link to={`/${user?.userName}`}>
              <img className="w-8 h-8 rounded-full" src={user?.avatar} alt="" />
            </Link>
            <div className="flex flex-col  ">
              <h2 className="mb-[-5px] flex items-center gap-2 text-sm ">
                <Link to={`/${user?.userName}`} className="link-dom">
                  <p>{user?.userName} </p>
                </Link>
                <img src={iconCertifier} alt="" />
              </h2>
              <Link to={`/${user?.userName}`}>
              <span className="text-gray-500 text-xs" >{user?.lienProfil} </span>
              </Link>
            </div>
          </div>
          <button className="bg-white text-black px-2 py-1 rounded-full">Follow</button>
        </div>
        )
      } )}
      <p className="text-blue-500 font-bold">Show more</p>
    </div>
  );
}

export default CardTwo;

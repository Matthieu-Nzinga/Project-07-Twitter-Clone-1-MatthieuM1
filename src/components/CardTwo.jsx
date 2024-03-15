import React from "react";
import { Link } from "react-router-dom";
import { iconCertifier } from "../assets/Icon";
import { useTweetContext } from "../models/TweetContext";

function CardTwo() {
  const contextData = useTweetContext();

  return (
    <div className="bg-gray-800 w-full flex gap-5 flex-col font-xl p-2.5 rounded-xl">
      <p className="font-bold">Who to follow</p>
      {contextData?.userProfils.slice(1, 8).map((element) => {
        return (
          <div className="flex items-center justify-between" key={element.id}>
            <div className="flex gap-2.5">
              <Link to={`/${element?.name}`}>
                <img
                  className="w-8 h-8 rounded-full"
                  src={element?.profilePicture}
                  alt=""
                />
              </Link>
              <div className="flex flex-col  ">
                <h2 className="mb-[-5px] flex items-center gap-2 text-sm ">
                  <Link to={`/${element?.name}`} className="link-dom">
                    <p>{element?.name} </p>
                  </Link>
                  <img src={iconCertifier} alt="" />
                </h2>
                <Link to={`/${element?.name}`}>
                  <span className="text-gray-500 text-xs">
                    {element?.handle}{" "}
                  </span>
                </Link>
              </div>
            </div>
            <button className="bg-white text-black px-2 py-1 rounded-full">
              Follow
            </button>
          </div>
        );
      })}
      <p className="text-blue-500 font-bold">Show more</p>
    </div>
  );
}

export default CardTwo;

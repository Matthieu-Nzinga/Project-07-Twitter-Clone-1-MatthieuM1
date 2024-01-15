import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { useTweetContext } from "../models/TweetContext";

function LikeTweet({ element, icon, text, hoverStyle, spanStyle, id, isLikeTweet }) {

  

  const { toggleLike } = useTweetContext();

  const handleChange = () => {
    toggleLike(id)
  };

  
  
  return (
    <button
      onClick={(event) => {
        handleChange();
      }}
      className={`flex items-center justify-center gap-2.5 max-w-max relative group`}
    >
      {text === "Like" && isLikeTweet ? 
        <div className="px-2">
          <FcLike style={{ width: "20px" }} />
        </div>
       : 
        <img
          className={`p-2.5 rounded-xl ${hoverStyle}`}
          src={icon}
          alt=""
          title={text}
        />
      }

      {text === "Like" && isLikeTweet ? (
        <span className={`text-orange-600 `}>{element} </span>
      ) : (
        <span className={`${spanStyle}`}>{element} </span>
      )}
    </button>
  );
}

export default LikeTweet;

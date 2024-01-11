import React, { useState } from "react";
import { FcLike } from "react-icons/fc";

function LikeTweet({ element, icon, text, hoverStyle, spanStyle }) {
  const [likeTweet, setLikeTweet] = useState(element);
  const [isLikeTweet, setIsLikeTweet] = useState(false);

  const handleChange = () => {
    if (isLikeTweet) {
      setLikeTweet(likeTweet - 1);
      setIsLikeTweet(false);
    } else {
      setLikeTweet(likeTweet + 1);
      setIsLikeTweet(true);
    }
  };
  return (
    <button
      onClick={(event) => {
        handleChange();
      }}
      className={`flex items-center justify-center gap-2.5 max-w-max relative group`}
    >
      {text === "Like" && isLikeTweet ? (
        <div className="px-2">
          <FcLike style={{ width: "20px" }} />
        </div>
      ) : (
        <img
          className={`p-2.5 rounded-xl ${hoverStyle}`}
          src={icon}
          alt=""
          title={text}
        />
      )}

      {text === "Like" && isLikeTweet ? (
        <span className={`text-orange-600 `}>{likeTweet} </span>
      ) : (
        <span className={`${spanStyle}`}>{likeTweet} </span>
      )}
    </button>
  );
}

export default LikeTweet;

import React, { useState } from "react";
import { FcLike } from "react-icons/fc";



function LikeTweet({ element, icon, text }) {
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
      onClick={(event) => {handleChange()}} className="tweet-action">
       {
        text === "Like" && isLikeTweet ? <div ><FcLike style={{ width: '20px' }}/></div> : <img src={icon} alt="" title={text} />
       }
      <span>{likeTweet} </span>
    </button>
    
  );
}

export default LikeTweet;

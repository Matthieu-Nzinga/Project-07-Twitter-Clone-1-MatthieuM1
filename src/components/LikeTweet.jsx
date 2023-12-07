import React, { useState } from "react";


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
      onClick={(event) => {handleChange();}} className="tweet-action">
      <img src={icon} alt="" title={text} />
      <span>{likeTweet} </span>
    </button>
  );
}

export default LikeTweet;

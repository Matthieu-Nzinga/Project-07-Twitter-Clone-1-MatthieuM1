import React from "react";
import TweetDetail from "./TweetDetail";
import { dataTweets } from "./Database";

function Tweet() {
  
  return (
    <div className="tweet">
      <TweetDetail tweet={dataTweets} />
    </div>
  );
}

export default Tweet;

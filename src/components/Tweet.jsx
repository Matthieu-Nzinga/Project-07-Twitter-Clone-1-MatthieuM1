import React from "react";
import TweetDetail from "./TweetDetail";
import { dataTweets } from "./Database";

function Tweet() {
  
  return (
    <div className="tweets">
      <TweetDetail tweet={dataTweets} />
    </div>
  );
}

export default Tweet;

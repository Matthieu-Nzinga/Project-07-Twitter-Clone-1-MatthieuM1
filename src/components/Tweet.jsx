import React from "react";
import TweetDetail from "./TweetDetail";
import { useTweetContext } from "../models/TweetContext";


function Tweet() {
  const { tweet } = useTweetContext();
  
  return (
    <div className="tweets">
      <TweetDetail tweet={tweet} />
    </div>
  );
}

export default Tweet;

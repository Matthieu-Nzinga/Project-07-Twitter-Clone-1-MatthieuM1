import React from "react";
import TweetDetail from "./TweetDetail";
import { tweets } from "../models/Database";

function Tweet() {
  
  return (
    <div className="tweets">
      <TweetDetail tweet={tweets} />
    </div>
  );
}

export default Tweet;

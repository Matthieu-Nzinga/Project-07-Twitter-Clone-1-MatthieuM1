import React from "react";
import TweetDetail from "./TweetDetail";
import { useTweetContext } from "../models/TweetContext";



function Tweet() {
  const { tweet } = useTweetContext();
  const { userProfils } = useTweetContext();
  
  return (
    <div className="tweets">
      <TweetDetail tweet={tweet} userProfil={userProfils}/>
    </div>
  );
}

export default Tweet;

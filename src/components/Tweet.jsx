import React from "react";
import TweetDetail from "./TweetDetail";
import { useTweetContext } from "../models/TweetContext";



function Tweet() {
  const  contextData = useTweetContext();
  
  
  return (
    <div className="tweets">
      <TweetDetail tweet={contextData?.tweet} userProfil={contextData?.userProfils}/>
    </div>
  );
}

export default Tweet;

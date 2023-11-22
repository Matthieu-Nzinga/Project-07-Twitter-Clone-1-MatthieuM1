import React from "react";
import { dataIcons } from "../assets/Icon";


function TweetAction() {

  return (
    <div className="tweet-editor-actions">
      {dataIcons.map((element, index) => (
        <button key={index}>
          <img src={element} alt="" />
        </button>
      ))}
    </div>
  );
}

export default TweetAction;

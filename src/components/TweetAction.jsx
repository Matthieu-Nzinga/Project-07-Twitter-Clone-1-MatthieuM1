import React from "react";
import { dataIcons } from "../assets/Icon";

function TweetAction() {
  return (
    <div className="tweet-editor-actions">
      {dataIcons.map((icon, index) => (
        <button key={index}>
          <img src={icon} alt="" />
        </button>
      ))}
    </div>
  );
}

export default TweetAction;

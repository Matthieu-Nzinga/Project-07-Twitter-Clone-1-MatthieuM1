import React from "react";
import { dataIcons } from "../assets/Icon";

function TweetAction() {
  return (
    <div className="flex items-center justify-start gap-4">
      {dataIcons.map((icon, index) => (
        <button key={index}>
          <img src={icon} alt="" />
        </button>
      ))}
    </div>
  );
}

export default TweetAction;

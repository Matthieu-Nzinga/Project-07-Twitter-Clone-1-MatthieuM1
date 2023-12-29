import React from "react";
import avatarImage from "../images/profile-photo.png";
import TweetAction from "./TweetAction";
import { Link } from "react-router-dom";

function TweetEditor() {
  return (
    <div className="tweet-editor">
      <aside className="avatar">
        <Link to={"/profileUser"} className="link-dom">
          <img src={avatarImage} alt="" />
        </Link>
      </aside>

      <div className="tweet-editor-form">
        <input
          className="tweet-editor-input"
          type="text"
          placeholder="What's happening?"
        />

        <div className="tweet-editor-buttons">
          <TweetAction />
          <button className="button">Tweet</button>
        </div>
      </div>
    </div>
  );
}

export default TweetEditor;

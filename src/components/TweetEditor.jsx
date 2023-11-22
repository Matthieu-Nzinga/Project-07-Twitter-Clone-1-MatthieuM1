import React from "react";
import profilPhoto from "../images/profile-photo.png";
import TweetAction from "./TweetAction";

function TweetEditor() {
  return (
    <div className="tweet-editor">
      <aside className="avatar">
        <img src={profilPhoto} alt="" />
      </aside>

      <div className="tweet-editor-form">
        <input
          className="tweet-editor-input"
          type="text"
          placeholder="What's happening?"
        />

        <div className="tweet-editor-buttons">
          <TweetAction/>
          <button className="button">Tweet</button>
        </div>
      </div>
    </div>
  );
}

export default TweetEditor;

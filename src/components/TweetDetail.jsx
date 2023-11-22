import React from "react";

function TweetDetail({ tweet }) {
  return (
    <div className="tweets">
      {tweet.map((element, index) => (
        <div key={index} className="tweet">
          <aside className="tweet-avatar">
            <img src={element.imageIcon} alt="" />
          </aside>
          <div className="tweet-content">
            <div className="tweet-body">
              {element.dataTitles.map((title, id) => (
                <h2 key={id} className="tweet-title">
                  <span className="tweet-title-author">{title.text} </span>
                  <img src={title.iconCer} alt="" />
                  <span className="tweet-title-details">{title.textMail} </span>
                  <span className="tweet-title-details">{title.temps} </span>
                </h2>
              ))}
              <p className="tweet-text">{element.description} </p>
              <div className="tweet-image">
                <img src={element.photo} alt="" />
              </div>
            </div>
            <div className="tweet-actions">
              {element.dataLikes.map((like, indexId) => (
                <div key={indexId} className="tweet-action">
                  <img src={like.iconLike} alt="" />
                  <span>{like.count} </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TweetDetail;

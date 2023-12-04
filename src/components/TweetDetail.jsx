import React from "react";

function TweetDetail({ tweet }) {
  return (
    <div className="tweets">
      {tweet.map((element, index) => (
        <div key={index} className="tweet">
          <aside className="tweet-avatar">
            <img src={element.avatar} alt="photo profil" />
          </aside>
          <div className="tweet-content">
            <div className="tweet-body">
              
                <h2 className="tweet-title">
                  <span className="tweet-title-author">{element.dataTitles.userName} </span>
                  <img src={element.dataTitles.iconCertification} alt="icon de certification" />
                  <span className="tweet-title-details">{element.dataTitles.lienProfil} </span>
                  <span className="tweet-title-details">{element.dataTitles.time} </span>
                </h2>
              
              <p className="tweet-text">{element.description} </p>
             { 
                  element.tweetImage ? <div className="tweet-image">
                      <img src={element.tweetImage} alt="" />
                    </div> : null 
             }
              {/* <div className="tweet-image">
                <img src={element.photo} alt="" />
              </div> */}
            </div>
            <div className="tweet-actions">
              {element.tweetIcons.map((like, indexId) => (
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

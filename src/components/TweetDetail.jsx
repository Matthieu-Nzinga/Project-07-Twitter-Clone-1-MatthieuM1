import { Link } from "react-router-dom";
import LikeTweet from "./LikeTweet";

function TweetDetail({ tweet }) {
  return (
    <ul className="tweets">
      {tweet.map((element) => (
        <li key={element.id} className="tweet" id={element.id}>
          <aside className="tweet-avatar">
            <Link to={`/${element.dataTitles.userName}`}>
              <img src={element.avatar} alt="photo profil" />
            </Link>
          </aside>
          <div className="tweet-content">
            <div className="tweet-body">
              <h2 className="tweet-title">
                <Link className="link-dom" to={`/${element.dataTitles.userName}`}>
                  <span className="tweet-title-author">
                    {element.dataTitles.userName}{" "}
                  </span>
                </Link>
                <img
                  src={element.dataTitles.iconCertification}
                  alt="icon de certification"
                />
                <span className="tweet-title-details">
                  {element.dataTitles.lienProfil}{" "}
                </span>
                <span className="tweet-title-details">
                  {element.dataTitles.time}{" "}
                </span>
              </h2>

              <p className="tweet-text">{element.description} </p>
              {element.tweetImage ? (
                <div className="tweet-image">
                  <img src={element.tweetImage} alt="" />
                </div>
              ) : null}
            </div>
            <div className="tweet-actions">
              <LikeTweet
                element={element.countCommentaire}
                icon={element.iconCommentaire}
                text={"Reply"}
              />
              <LikeTweet
                element={element.countRetweet}
                icon={element.iconRetweet}
                text={"Repost"}
              />
              <LikeTweet
                element={element.countLike}
                icon={element.iconLike}
                text={"Like"}
              />

              <button className="tweet-action">
                <img src={element.iconPartage} alt="" />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TweetDetail;

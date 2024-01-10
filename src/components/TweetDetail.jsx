import { Link } from "react-router-dom";
import LikeTweet from "./LikeTweet";

function TweetDetail({ tweet }) {
  return (
    <ul>
      {tweet.map((element) => (
        <li
          className="flex justify-start items-start gap-5 py-6 px-4 border-b border-solid border-gray-700"
          key={element.id}
          id={element.id}
        >
          <aside className="w-20 h-20 flex-shrink-0 flex-grow-0 flex-basis-70">
            <Link to={`/${element.dataTitles.userName}`}>
              <img
                className="max-w-full max-h-25 rounded-full"
                src={element.avatar}
                alt="photo profil"
              />
            </Link>
          </aside>
          <div className="flex flex-col items-start justify-start gap-7.5 w-full">
            <div className="tweet-body">
              <h2 className="tweet-title">
                <Link
                  className="link-dom"
                  to={`/${element.dataTitles.userName}`}
                >
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

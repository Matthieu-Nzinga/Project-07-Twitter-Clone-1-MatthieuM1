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
            <div className="flex flex-col gap-3">
              <h2 className="flex justify-start items-start gap-2.5 text-base">
                <Link
                  className="text-white no-underline"
                  to={`/${element.dataTitles.userName}`}
                >
                  <span className="text-base">
                    {element.dataTitles.userName}{" "}
                  </span>
                </Link>
                <img className="w-5 h-auto"
                  src={element.dataTitles.iconCertification}
                  alt="icon de certification"
                />
                <span className="text-gray-500">
                  {element.dataTitles.lienProfil}{" "}
                </span>
                <span className="text-gray-500">
                  {element.dataTitles.time}{" "}
                </span>
              </h2>

              <p className="text-base">{element.description} </p>
              {element.tweetImage ? (
                <div className="w-full pt-0.3">
                  <img className="max-w-full h-auto rounded-3xl border-solid border-2F3336 border-1" src={element.tweetImage} alt="" />
                </div>
              ) : null}
            </div>
            <div className="flex justify-center items-center gap-16 text-gray-500 text-base pt-2.5">
              <LikeTweet 
                element={element.countCommentaire}
                icon={element.iconCommentaire}
                text={"Reply"}
                hoverStyle="group-hover:bg-blue-700"
                spanStyle="group-hover:text-blue-700"
              />
              <LikeTweet
                element={element.countRetweet}
                icon={element.iconRetweet}
                text={"Repost"}
                hoverStyle="group-hover:bg-green-300"
                spanStyle="group-hover:text-green-300"
              />
              <LikeTweet
                element={element.countLike}
                icon={element.iconLike}
                text={"Like"}
                hoverStyle="group-hover:bg-pink-600"
                spanStyle="group-hover:text-pink-600"
              />

              <button className="flex items-center justify-center gap-2.5 max-w-max">
                <img className="p-2.5 rounded-xl hover:bg-blue-500" src={element.iconPartage} alt="" title="Shar"/>
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TweetDetail;

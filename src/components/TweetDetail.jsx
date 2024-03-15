import { Link } from "react-router-dom";
import LikeTweet from "./LikeTweet";
import {
  iconCertifier,
  iconLike1,
  iconLike2,
  iconLike3,
  iconLike4,
} from "../assets/Icon";
import { useTweetContext } from "../models/TweetContext";
import { formatTweetDate } from "../models/Database";

function TweetDetail({ tweet, userProfil }) {
  const { loading } = useTweetContext();

  tweet?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (tweet?.length == 0) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <div className="text-red-300 text-2xl font-bold">
          Erreur de chargement des données. <br /> Veuillez réessayer
          ultérieurement
        </div>
      </div>
    );
  }

  return (
    <ul>
      {tweet &&
        tweet?.length &&
        tweet?.map((element) => {
          const user = userProfil?.find((use) => use.id === element.author);

          return (
            <li
              className="flex justify-start items-start gap-5 py-6 px-4 border-b border-solid border-gray-700"
              key={element.id}
              id={element.id}
            >
              <aside className="w-15 h-15 flex-shrink-0 flex-grow-0 flex-basis-70">
                <Link to={`/${user?.name}`}>
                  <img
                    className="w-[50px] h-[50px] rounded-full"
                    src={user?.profilePicture}
                    alt="photo profil"
                  />
                </Link>
              </aside>
              <div className="flex flex-col items-start justify-start gap-7.5 w-full">
                <div className="flex flex-col gap-3">
                  <h2 className="flex justify-start items-start gap-2.5 text-base">
                    <Link
                      className="text-white no-underline"
                      to={`/${user?.name}`}
                    >
                      <span className="text-base">{user?.name} </span>
                    </Link>
                    <img
                      className="w-5 h-auto"
                      src={iconCertifier}
                      alt="icon de certification"
                    />
                    <Link to={`/${user?.name}`}>
                      <span className="text-gray-500">{user?.handle} </span>
                    </Link>
                    <span className="text-gray-500">
                      {formatTweetDate(element?.createdAt)}
                    </span>
                  </h2>

                  <p className="text-base">{element.text} </p>
                  {element.media ? (
                    <div className="w-full pt-0.3">
                      <img
                        className="max-w-full h-auto rounded-3xl border-solid border-2F3336 border-1"
                        src={element?.media}
                        alt=""
                      />
                    </div>
                  ) : null}
                </div>
                <div className="flex justify-center items-center gap-16 text-gray-500 text-base pt-2.5">
                  <button className="flex items-center justify-center gap-2.5 max-w-max group">
                    <img
                      className="p-2.5 rounded-xl group-hover:bg-blue-700"
                      src={iconLike1}
                      alt=""
                      title="Reply"
                    />
                    <span className="group-hover:text-blue-700">
                      {element.repliesCount}{" "}
                    </span>
                  </button>
                  <button className="flex items-center justify-center gap-2.5 max-w-max group">
                    <img
                      className="p-2.5 rounded-xl group-hover:bg-green-300"
                      src={iconLike2}
                      alt=""
                      title="Repost"
                    />
                    <span className="group-hover:text-green-300">
                      {element.retweetCount}{" "}
                    </span>
                  </button>
                  <LikeTweet
                    id={element?.id}
                    element={element.favoriteCount}
                    icon={iconLike3}
                    text={"Like"}
                    hoverStyle="group-hover:bg-pink-600"
                    spanStyle="group-hover:text-pink-600"
                    userId={user?.id}
                  />
                  <button className="flex items-center justify-center gap-2.5 max-w-max">
                    <img
                      className="p-2.5 rounded-xl hover:bg-blue-500"
                      src={iconLike4}
                      alt=""
                      title="Shar"
                    />
                  </button>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default TweetDetail;

import React, { useState } from "react";
import avatarImage from "../images/profile-photo.png";
import TweetAction from "./TweetAction";
import { Link } from "react-router-dom";
import { userProfil } from "../models/User";
import { tweets } from "../models/Database";
import { useTweetContext } from "../models/TweetContext";
import { iconLike1, iconLike2, iconLike3, iconLike4 } from "../assets/Icon";

function TweetEditor() {
  const { addTweet } = useTweetContext();
  const userP = userProfil.find((user) => user.isLogin === true);

  const [description, setDescription] = useState("");
  const [commentaire, setCommentaire] = useState(0);
  const [retweet, setRetweet] = useState(0);
  const [like, setLike] = useState(0);

  const [posts, setPosts] = useState(tweets);

  const handleCreatePost = () => {
    const id = Math.floor(Math.random() * (1000 - 5));

    const pos = {
      userId: userP.userId,
      id: id,
      avatar: userP.avatar,
      dataTitles: {
        userName: userP.userName,
        iconCertification: userP.iconCertification,
        lienProfil: userP.lienProfil,
        time: new Date().toISOString().substr(11, 5)
      },
      description: description,
      iconCommentaire: iconLike1,
      countCommentaire: commentaire,
      iconRetweet: iconLike2,
      countRetweet: retweet,
      iconLike: iconLike3,
      countLike: like,
      iconPartage: iconLike4,
      isLikeTweet: false,
    };
    setDescription("")
    addTweet(pos);
  };

  return (
    <div className="flex items-start justify-start gap-[20px] px-[.3rem] py-[1rem] border-b border-solid border-gray-700 ">
      <aside className="basis-20 ">
        <Link to={`/${userP.userName}`} className="link-dom">
          <img
            className="max-w-full max-h-full rounded-full"
            src={userP.avatar}
            alt=""
          />
        </Link>
      </aside>

      <div className="flex-auto">
        <input
          className="h-[60px] w-full border-none outline-none text-white bg-black p-10 resize-none text-lg my-13 text-xl"
          type="text"
          placeholder="What's happening?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex items-center justify-between">
          <TweetAction />
          <button
            className="bg-blue-500 font-base text-white py-[.7rem] px-[1.5rem] "
            onClick={handleCreatePost}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetEditor;

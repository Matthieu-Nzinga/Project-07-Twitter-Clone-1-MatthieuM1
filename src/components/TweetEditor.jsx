import React, { useState } from "react";
import avatarImage from "../images/profile-photo.png";
import TweetAction from "./TweetAction";
import { Link } from "react-router-dom";
import { useTweetContext } from "../models/TweetContext";
import {
  iconLike1,
  iconLike2,
  iconLike3,
  iconLike4,
  iconPhoto,
} from "../assets/Icon";

function TweetEditor() {
  const { userProfils } = useTweetContext();
  const { addTweet } = useTweetContext();
  const userP = userProfils.find((user) => user.isLogin === true);

  const [description, setDescription] = useState("");
  const [commentaire, setCommentaire] = useState(0);
  const [retweet, setRetweet] = useState(0);
  const [like, setLike] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCreatePost = () => {
    const id = Math.floor(Math.random() * (1000 - 5));

    const post = {
      userId: userP.userId,
      id: id,
      tweetImage: selectedImage,
      time: new Date().toISOString().substr(11, 5),
      description: description,
      countCommentaire: commentaire,
      countRetweet: retweet,
      countLike: like,
      isLikeTweet: false,
    };
    setDescription("");
    setSelectedImage(null);
    addTweet(post);
  };


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };
    reader.readAsDataURL(file);
    event.target.value = null;
  };

  return (
    <div className="flex items-start justify-start gap-[20px] px-[.3rem] py-[1rem] border-b border-solid border-gray-700 ">
      <aside className="basis-20 ">
        <Link to={`/${userP?.userName}`} className="link-dom">
          <img
            className="max-w-full max-h-full rounded-full"
            src={userP?.avatar}
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
          <div className="flex items-center justify-start gap-4">
            <label htmlFor={`file-input`} className="relative cursor-pointer">
              <input
                type="file"
                id={`file-input`}
                className="absolute w-0 h-0 overflow-hidden"
                onChange={handleImageChange}
              />
              <img src={iconPhoto} alt="" className="w-4.5 h-4.5" />
            </label>
            <TweetAction />
          </div>
          <button
            className="bg-blue-500 font-base text-white py-[.7rem] px-[1.5rem] rounded-full"
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

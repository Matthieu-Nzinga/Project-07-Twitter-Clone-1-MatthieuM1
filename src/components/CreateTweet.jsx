import React, { useState } from "react";
import TweetAction from "./TweetAction";
import { useTweetContext } from "../models/TweetContext";
import { useForm } from "react-hook-form";
import { iconPhoto } from "../assets/Icon";

const CreateTweet = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const descriptionValue = watch("description", "");
  const imageValue = watch("selectedImage");
  const isFormEmpty =
    descriptionValue.trim() === "" &&
    (imageValue === undefined || imageValue[0] === undefined);

  const { addTweet } = useTweetContext();
  const contextData = useTweetContext();
  const user =
    contextData?.userProfils &&
    contextData?.userProfils?.length &&
    contextData?.userProfils?.find((user) => user.isLogin === true);

  const [commentaire, setCommentaire] = useState(0);
  const [retweet, setRetweet] = useState(0);
  const [like, setLike] = useState(0);

  // const handleCreatePost = (data) => {
  //   const id = Math.floor(Math.random() * (1000 - 5));
  //   const selectedFile = data.selectedImage[0];

  //   if (selectedFile) {
  //     const reader = new FileReader();

  //     reader.onload = function (event) {
  //       const imageUrl = event.target.result;
  //       const post = {
  //         userId: userP.userId,
  //         id: id,
  //         tweetImage: imageUrl,
  //         time: new Date().toISOString(),
  //         description: data.description,
  //         countCommentaire: commentaire,
  //         countRetweet: retweet,
  //         countLike: like,
  //         isLikeTweet: false,
  //       };
  //       addTweet(post);
  //       reset();
  //     };

  //     reader.readAsDataURL(selectedFile);
  //   } else {
  //     const post = {
  //       userId: userP.userId,
  //       id: id,
  //       tweetImage: null,
  //       time: new Date().toISOString(),
  //       description: data.description,
  //       countCommentaire: commentaire,
  //       countRetweet: retweet,
  //       countLike: like,
  //       isLikeTweet: false,
  //     };
  //     addTweet(post);
  //     reset();
  //   }
  // };
  const handleCreatePost = (data) => {
    const id = Math.floor(Math.random() * (1000 - 255))
    const newTweet = {
      id: id, 
      author:user?.id,
      media:[],
      retweetCount:0,
      favoriteCount:0,
      repliesCount:0,
      text:data.description,
      createdAt: new Date().toISOString()
    };
    addTweet(newTweet);
    reset();
  };

  return (
    <div className="flex-auto">
      <form onSubmit={handleSubmit((data) => handleCreatePost(data))}>
        <input
          {...register("description", { required: true, maxLength: 180 })}
          className="h-[60px] w-full border-none outline-none text-white bg-black p-10 resize-none text-lg my-13 text-xl"
          type="text"
          placeholder="What's happening?"
        />
        {errors.description && (
          <p className="bold text-red-700">
            Ce champ est obligatoire et ne doit pas dépasser 180 caractères.
          </p>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-4">
            <label htmlFor={`file-input`} className="relative cursor-pointer">
              <input
                type="file"
                id={`file-input`}
                className="absolute w-0 h-0 overflow-hidden"
                {...register("selectedImage")}
              />
              <img src={iconPhoto} alt="" className="w-4.5 h-4.5" />
            </label>
            <TweetAction />
          </div>
          <button
            disabled={isFormEmpty}
            type="submit"
            className="bg-blue-500 font-base text-white py-[.7rem] px-[1.5rem] rounded-full"
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTweet;

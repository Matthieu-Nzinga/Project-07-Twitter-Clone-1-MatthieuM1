import React, { createContext, useState, useContext } from "react";
import { tweets } from "./Database";

const TweetContext = React.createContext();

export const useTweetContext = () => {
  return useContext(TweetContext);
};

export const TweetProvider = ({ children }) => {
  const [tweet, setTweet] = useState([...tweets]);

  const addTweet = (newTweet) => {
    setTweet([...tweet, newTweet]);
  };

  const toggleLike = (tweetId) => {
    const updatedTweets = tweet.map((tweeters) => {
      if (tweeters.id === tweetId) {
        const newLikeCount = tweeters.isLikeTweet ? tweeters.countLike - 1 : tweeters.countLike + 1;
        return { ...tweeters, countLike: newLikeCount, isLikeTweet: !tweeters.isLikeTweet };
      }
      return tweeters;
    });
    setTweet(updatedTweets);
  };
  return (
    <TweetContext.Provider value={{ tweet, addTweet, toggleLike }}>
      {children}
    </TweetContext.Provider>
  );
};

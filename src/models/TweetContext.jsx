import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const TweetContext = React.createContext();

export const useTweetContext = () => {
  return useContext(TweetContext);
};

export const TweetProvider = ({ children }) => {
  const [tweet, setTweet] = useState([]);
  const [userProfils, setPserProfils] = useState([]);

  useEffect(() => {
    axios
      .get("/src/data/initial-data.json")
      .then((response) => {
        setTweet(response.data.tweets);
        setPserProfils(response.data.userProfil);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des tweets : ", error);
      });
  }, []);

  const addTweet = (newTweet) => {
    setTweet([newTweet, ...tweet]);
  };

  const toggleLike = (tweetId) => {
    const updatedTweets = tweet.map((tweeters) => {
      if (tweeters.id === tweetId) {
        const newLikeCount = tweeters.isLikeTweet
          ? tweeters.countLike - 1
          : tweeters.countLike + 1;
        return {
          ...tweeters,
          countLike: newLikeCount,
          isLikeTweet: !tweeters.isLikeTweet,
        };
      }
      return tweeters;
    });
    setTweet(updatedTweets);
  };
  return (
    <TweetContext.Provider value={{ userProfils, tweet, addTweet, toggleLike }}>
      {children}
    </TweetContext.Provider>
  );
};

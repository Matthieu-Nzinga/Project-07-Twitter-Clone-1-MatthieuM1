import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const TweetContext = React.createContext();

export const useTweetContext = () => {
  return useContext(TweetContext);
};

export const TweetProvider = ({ children }) => {
  const [tweet, setTweet] = useState([]);
  const [userProfils, setPserProfils] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/current-user")
      .then((response) => {
        setPserProfils(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des tweets : ", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/tweets")
      .then((response) => {
        setTweet(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des tweets : ", error);
        setLoading(false);
      });
  }, []);

  const addTweet = (newTweet) => {
    axios
      .post("http://localhost:8000/tweets", newTweet)
      .then((response) => setTweet([response.data, ...tweet]));
  };

  const toggleLike = (tweetId) => {
    const updatedTweets = tweet.map((tweeters) => {
      if (tweeters.id === tweetId) {
        const newLikeCount = tweeters.isLikeTweet
          ? tweeters.countLike - 1
          : tweeters.countLike + 1;
  
        axios.put(`http://localhost:8000/tweets/${tweetId}`, {
          ...tweeters,
          countLike: newLikeCount,
          isLikeTweet: !tweeters.isLikeTweet,
        }).then((response) => {
          const updatedTweet = response.data;
          const updatedTweets = tweet.map((item) =>
            item.id === updatedTweet.id ? updatedTweet : item
          );
          setTweet(updatedTweets);
        }).catch((error) => {
          console.error("Une erreur s'est produite lors de la mise à jour du tweet :", error);
        });
      }
      return tweeters;
    });
  };
  return (
    <TweetContext.Provider value={{ userProfils, tweet, addTweet, toggleLike, loading}}>
      {children}
    </TweetContext.Provider>
  );
};

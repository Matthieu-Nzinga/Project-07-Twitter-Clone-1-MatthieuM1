import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from "react";
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
      .get("https://twitter-clone-api-c3-matthieu-nzinga.onrender.com/users")
      .then((response) => {
        setPserProfils(response.data?.users);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des tweets : ", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://twitter-clone-api-c3-matthieu-nzinga.onrender.com/tweets")
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
      .post(
        "https://twitter-clone-api-c3-matthieu-nzinga.onrender.com/tweets",
        newTweet
      )
      .then((response) => setTweet([response.data, ...tweet]));
  };

  const toggleLike = (tweetId, userId) => {
    axios
      .put(`https://twitter-clone-api-c3-matthieu-nzinga.onrender.com/tweets/${tweetId}/like`, {
        userId: userId,
      })
      .then((response) => {
       
        const updatedTweet = response.data;
        const updatedTweets = tweet.map((tweet) =>
          tweet.id === updatedTweet.id ? updatedTweet : tweet
        );
        setTweet(updatedTweets);
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour du like :", error);
      });
  };
  

 

  // useMemo(() => {
  //   console.log({
  //     userProfils, tweet
  //   });
  // }, [userProfils, tweet])
  return (
    <TweetContext.Provider
      value={{ userProfils, tweet, addTweet, toggleLike, loading }}
    >
      {children}
    </TweetContext.Provider>
  );
};

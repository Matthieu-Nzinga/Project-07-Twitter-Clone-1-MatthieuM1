import React, { useEffect } from "react";
import Header from "../components/Header";
import TweetEditor from "../components/TweetEditor";
import Tweet from "../components/Tweet";


function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      
    });
  }, []);
  return (
      <main className="w-[800px] border-x-[1px] border-solid border-gray-700 ">
        <Header />
        <TweetEditor />
        <Tweet />
      </main>
  );
}

export default Home;

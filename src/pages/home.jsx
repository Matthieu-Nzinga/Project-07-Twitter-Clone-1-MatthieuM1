import React from "react";
import Header from "../components/Header";
import TweetEditor from "../components/TweetEditor";
import Tweet from "../components/Tweet";


function Home() {
  return (
      <main className="w-[800px] border-x-[1px] border-solid border-gray-700 ">
        <Header />
        <TweetEditor />
        <Tweet />
      </main>
  );
}

export default Home;

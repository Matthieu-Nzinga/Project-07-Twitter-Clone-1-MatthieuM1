import React from "react";
import {iconCertifier, iconLike1, iconLike2, iconLike3, iconLike4, imageTs, imageTs1, imageTweets} from "../assets/Icon";
import TweetDetail from "./TweetDetail";

function Tweet() {
  const dataTweets = [
    {
      imageIcon: imageTweets,
      photo: null,
      dataTitles: [
        {
          text: "CNN",
          iconCer: iconCertifier,
          textMail: "@CNN .",
          temps: "7m",
        },
      ],
      description:
        "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",
      dataLikes: [
        {
          iconLike: iconLike1,
          count: 57,
        },
        {
          iconLike: iconLike2,
          count: 144,
        },
        {
          iconLike: iconLike3,
          count: 184,
        },
        {
          iconLike: iconLike4,
        },
      ],
    },
    {
      imageIcon: imageTs1,
      photo: imageTs,
      dataTitles: [
        {
          text: "The New York Times",
          iconCer: iconCertifier,
          textMail: "@nytimes .",
          temps: "2h",
        },
      ],
      description:
        "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land.",
      dataLikes: [
        {
          iconLike: iconLike1,
          count: 19,
        },
        {
          iconLike: iconLike2,
          count: 48,
        },
        {
          iconLike: iconLike3,
          count: 442,
        },
        {
          iconLike: iconLike4,
        },
      ],
    },
  ];

  return (
    <div className="tweet">
      <TweetDetail tweet={dataTweets} />
    </div>
  );
}

export default Tweet;

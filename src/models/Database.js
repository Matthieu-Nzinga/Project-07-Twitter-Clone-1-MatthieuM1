import {
  iconCertifier,
  iconLike1,
  iconLike2,
  iconLike3,
  iconLike4,
  imageTs,
  imageTs1,
  imageTweeter,
  imageTweets,
} from "../assets/Icon";

export const tweets = [
  {
    userId : 1,
    id: 1,
    avatar: imageTweets,
    tweetImage: null,
    dataTitles: {
      userName: "CNN",
      iconCertification: iconCertifier,
      lienProfil: "@CNN .",
      time: "7m",
    },

    description:
      "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",

    iconCommentaire: iconLike1,
    countCommentaire: 57,

    iconRetweet: iconLike2,
    countRetweet: 144,

    iconLike: iconLike3,
    countLike: 184,

    iconPartage: iconLike4,
  },
  {
    userId : 2,
    id: 2,
    avatar: imageTs1,
    tweetImage: imageTs,
    dataTitles: {
      userName: "The New York Times",
      iconCertification: iconCertifier,
      lienProfil: "@nytimes .",
      time: "2h",
    },

    description:
      "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land.",
    iconCommentaire: iconLike1,
    countCommentaire: 19,

    iconRetweet: iconLike2,
    countRetweet: 48,

    iconLike: iconLike3,
    countLike: 482,

    iconPartage: iconLike4,
  },
  {
    userId : 3,
    id: 3,
    avatar: imageTweeter,
    tweetImage: null,
    dataTitles: {
      userName: "Twitter",
      iconCertification: iconCertifier,
      lienProfil: "@Twitter .",
      time: "Oct 29",
    },

    description: "BIG NEWS lol jk still Twitter",
    iconCommentaire: iconLike1,
    countCommentaire: 68,

    iconRetweet: iconLike2,
    countRetweet: 366,

    iconLike: iconLike3,
    countLike: 267,

    iconPartage: iconLike4,
  },
  {
    userId : 3,
    id: 4,
    avatar: imageTweeter,
    tweetImage: null,
    dataTitles: {
      userName: "Twitter",
      iconCertification: iconCertifier,
      lienProfil: "@Twitter .",
      time: "Oct 4",
    },

    description: "hello literally everyone",
    iconCommentaire: iconLike1,
    countCommentaire: 51,

    iconRetweet: iconLike2,
    countRetweet: 10,

    iconLike: iconLike3,
    countLike: 10,

    iconPartage: iconLike4,
  },
];

export const squid = [
  {
    id: 1,
    description: "Trending in Turkye",
    pseudo: "#SQUID",
    count: "2,066 Tweets",
    point: "...",
  },
  {
    id: 2,
    description: "Trending in Turkye",
    pseudo: "#SQUID",
    count: "2,066 Tweets",
    point: "...",
  },
  {
    id: 3,
    description: "Trending in Turkye",
    pseudo: "#SQUID",
    count: "2,066 Tweets",
    point: "...",
  },
  {
    id: 4,
    description: "Trending in Turkye",
    pseudo: "#SQUID",
    count: "2,066 Tweets",
    point: "...",
  },
];

export const follows = [
  {
    id: 1,
    avatar: imageTs1,
    userName: "The New York Times",
    iconCertification: iconCertifier,
    lienProfil: "@nytimes",
  },
  {
    id: 2,
    avatar: imageTweets,
    userName: "CNN",
    iconCertification: iconCertifier,
    lienProfil: "@CNN",
  },
  {
    id: 3,
    avatar: imageTweeter,
    userName: "Twitter",
    iconCertification: iconCertifier,
    lienProfil: "@Twitter",
  },
];

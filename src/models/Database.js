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
    userId: 2,
    id: 1,
  },
  {
    userId: 1,
    id: 2,
  },
  {
    userId: 3,
    id: 3,
  },
];

export function formatTweetDate(date) {
  const tweetDate = new Date(date);
  const currentDate = new Date();

  const timeDifference = (currentDate - tweetDate) / (1000 * 60); 

  if (timeDifference < 60) {
    return `${Math.round(timeDifference)} min`;
  } else if (timeDifference < 24 * 60) {
    return `${Math.round(timeDifference / 60)} h`;
  } else {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return tweetDate.toLocaleDateString('en-US', options);
  }
}
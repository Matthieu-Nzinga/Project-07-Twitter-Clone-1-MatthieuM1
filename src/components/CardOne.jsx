import React from "react";
import "../style/rightAsideBar.css";
import { CiSettings } from "react-icons/ci";

function CardOne() {
  const squid = [
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
  ];
  return (
    <div className="card-one">
      <div className="setting">
        <p>Trands for you</p>
        <CiSettings />
      </div>

      {squid.map((element) => (
        <div className="detail" key={element.id}>
          <div>
            <span>{element.description}</span>
            <span>{element.point}</span>
          </div>
          <p>{element.pseudo}</p>
          <span>{element.count}</span>
        </div>
      ))}
    </div>
  );
}

export default CardOne;

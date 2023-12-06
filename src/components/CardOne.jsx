import React from "react";
import "../style/rightAsideBar.css";
import { CiSettings } from "react-icons/ci";
import { squid } from "../models/Database";

function CardOne() {
  
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
      <p className="show-more">Show more</p>
    </div>
  );
}

export default CardOne;
